import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { useState } from "react";

export function Routes() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <NavigationContainer>
      {(isLogged && <AdminRoutes />) || <AppRoutes />}
    </NavigationContainer>
  );
}
