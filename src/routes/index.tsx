import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "@components/Loading";

export function Routes() {
  const { token, isLoadingUser } = useAuth();

  
  if(isLoadingUser){
    return <Loading />
  }
  return (
    <NavigationContainer>
      {(token && <AdminRoutes />) || <AppRoutes />}
    </NavigationContainer>
  );
}
