import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from "./app.routes"
import { AdminRoutes } from "./admin.routes"
import { useAuth } from "../hooks/useAuth"
import { Loading } from "@components/Loading"
import { ProfileProvider } from "@contexts/ProfileContext"

export function Routes() {
  const { token, isLoadingUser } = useAuth()

  if (isLoadingUser) {
    return <Loading />
  }
  return (
    <NavigationContainer>
      {(token && (
        <ProfileProvider>
          <AdminRoutes />
        </ProfileProvider>
      )) || <AppRoutes />}
    </NavigationContainer>
  )
}
