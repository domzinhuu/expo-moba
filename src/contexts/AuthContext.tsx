import { UserDto } from "@dtos/UserDTO";
import { api } from "@services/api";
import {
  storageSessionGet,
  storageSessionRemove,
  storageSessionSave,
} from "@storage/storageToken";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface AuthContextProps {
  user?: UserDto;
  token?: string;
  refreshToken?: string;
  isLoadingUser: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updaetUser: (userData: UserDto) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserDto>();
  const [token, setToken] = useState<string>();
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [refreshToken, setRefreshToken] = useState<string>();

  async function loadSessionData() {
    try {
      const userLogged = await storageUserGet();
      const { token, refreshToken } = await storageSessionGet();

      if (token && userLogged) {
        await updateUserAndAToken(userLogged, token, refreshToken);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUser(false);
    }
  }

  async function updaetUser(userData: UserDto) {
    await storageUserSave(userData);
    setUser(userData);
  }
  async function updateUserAndAToken(
    userData: UserDto,
    token?: string,
    refreshToken?: string
  ) {
    api.defaults.headers.common["Authorization"] = token;
    await updaetUser(userData);
    setToken(token);
    setRefreshToken(refreshToken);
  }

  async function signIn(email: string, password: string) {
    try {
      const { currentClient, accessToken, refreshToken }: any = await api.post(
        "/login",
        { email, password }
      );

      if (accessToken && currentClient) {
        await storageUserSave(currentClient);
        await storageSessionSave(accessToken, refreshToken);
      }

      await updateUserAndAToken(currentClient, accessToken, refreshToken);
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setIsLoadingUser(true);
      setUser({} as UserDto);
      setToken("");

      await storageUserRemove();
      await storageSessionRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUser(false);
    }
  }

  useEffect(() => {
    loadSessionData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        refreshToken,
        user,
        isLoadingUser,
        signIn,
        signOut,
        updaetUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
