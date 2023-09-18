import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "@theme/base";
import { TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProfileScreen } from "../screens/Profile";
import { useAuth } from "@hooks/useAuth";
import { StatusBar } from "expo-status-bar";
import { DashboardScreen } from "@screens/Dashboard";
import { LogoutButton } from "@shared/Logout";
import { ChartScreen } from "@screens/Charts";

const { Navigator, Screen } = createBottomTabNavigator();
const screenOptions = {
  headerTintColor: theme.colors.white[500],
  tabBarInactiveTintColor: theme.colors.white[500],
  tabBarActiveTintColor: theme.colors.secondary[500],
  tabBarStyle: {
    backgroundColor: theme.colors.primary[500],
  },
  headerStyle: {
    backgroundColor: theme.colors.primary[500],
  },
};

export function AdminRoutes() {
  const { signOut } = useAuth();

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
          }}
        />

        <Screen
          name="Sair"
          component={LogoutButton}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              signOut();
            },
          }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-out-outline" size={24} color={color} />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
