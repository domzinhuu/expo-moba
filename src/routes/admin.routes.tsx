import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { theme } from "@theme/base"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "@hooks/useAuth"
import { StatusBar } from "expo-status-bar"
import { DashboardScreen } from "@screens/Dashboard"
import { LogoutButton } from "@shared/Logout"
import { ChartScreen } from "@screens/Charts"
import { AcquirerScreen } from "@screens/Acquirer"
import { ProfileScreen } from "@screens/Profile"
import { useContext } from "react"
import { ProfileContext } from "@contexts/ProfileContext"

const { Navigator, Screen } = createBottomTabNavigator()
const screenOptions = {
  headerTintColor: theme.colors.white[500],
  tabBarInactiveTintColor: theme.colors.white[500],
  tabBarActiveTintColor: theme.colors.secondary[500],
  tabBarStyle: {
    backgroundColor: theme.colors.primary[500],
    height: 64,
  },
  tabBarItemStyle: {
    paddingVertical: 8,
  },
  headerStyle: {
    backgroundColor: theme.colors.primary[500],
  },
}

export function AdminRoutes() {
  const { signOut } = useAuth()
  const { onToggleEdit, isEditing, handleSubmit } = useContext(ProfileContext)

  return (
    <>
      <StatusBar style="light" translucent backgroundColor={"transparent"} />

      <Navigator
        screenOptions={{
          ...screenOptions,
        }}
      >
        <Screen
          component={DashboardScreen}
          name="Dashboard"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={24} color={color} />
            ),
          }}
        />

        <Screen
          component={AcquirerScreen}
          name="Maquininhas"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calculator-outline" size={24} color={color} />
            ),
          }}
        />

        <Screen
          component={ChartScreen}
          name="Gráficos"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" size={24} color={color} />
            ),
          }}
        />
        <Screen
          component={ProfileScreen}
          name="Perfil"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle-outline" size={24} color={color} />
            ),
            headerRight: () => (
              <Ionicons
                name={isEditing ? "save-outline" : "create-outline"}
                size={20}
                style={{ marginRight: 16 }}
                color={theme.colors.white[500]}
                onPress={handleSubmit(onToggleEdit)}
              />
            ),
          }}
        />

        {/*   <Screen
          name="Sair"
          component={LogoutButton}
          listeners={{
            tabPress: (e) => {
              e.preventDefault()
              signOut()
            },
          }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-out-outline" size={24} color={color} />
            ),
          }}
        /> */}
      </Navigator>
    </>
  )
}
