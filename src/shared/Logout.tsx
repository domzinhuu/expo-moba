import { useAuth } from "@hooks/useAuth";
import { Button } from "react-native";

export function LogoutButton() {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return <Button title="Logout" onPress={handleLogout} />;
}
