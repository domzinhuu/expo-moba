import { PropsWithChildren, createContext, useState } from "react";
import { UserDto } from "../dtos/UserDTO";

interface AuthContextProps {
  user?: UserDto;
  token?: string;
  refreshToken?: string;
  updateUser: (user: UserDto) => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserDto>();
  const [token, setToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();

  function updateAuthContext(
    userDto: UserDto,
    token?: string,
    refreshToken?: string
  ) {
    setUser(userDto);
    setToken(token);
    setRefreshToken(refreshToken);
  }

  return (
    <AuthContext.Provider
      value={{ token, refreshToken, user, updateUser: updateAuthContext }}
    >
      {children}
    </AuthContext.Provider>
  );
}
