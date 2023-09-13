import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {(token && <AdminRoutes />) || <AppRoutes />}
    </NavigationContainer>
  );
}
