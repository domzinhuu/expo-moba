import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DashboardScreen } from "./src/screens/Dashboard"
import { ProfileScreen } from "./src/screens/Profile"
import { Ionicons } from "@expo/vector-icons"
import { TouchableHighlight } from "react-native"
import { theme } from "@theme/base"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerTintColor: theme.colors.white[500],
          tabBarInactiveTintColor: theme.colors.white[500],
          tabBarActiveTintColor: theme.colors.secondary[500],
          tabBarStyle: {
            backgroundColor: theme.colors.primary[500],
          },
          headerStyle: {
            backgroundColor: theme.colors.primary[500],
          },
          headerRight: () => (
            <TouchableHighlight style={{ paddingHorizontal: 16 }}>
              <Ionicons
                name="log-out-outline"
                size={24}
                color={theme.colors.white[500]}
              />
            </TouchableHighlight>
          ),
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={size} color={color} />
            ),
          }}
          name="Dashboard"
          component={DashboardScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle" size={size} color={color} />
            ),
          }}
          name="Perfil"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </>
  )
}

export default AppNavigator
