import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../theme/base";
import { TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DashboardScreen } from "../screens/Dashboard";
import { ProfileScreen } from "../screens/Profile";

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
  const handleLogoutPress = () => {
    console.log("Sair pressionado");
  };

  return (
    <Navigator
      screenOptions={{
        ...screenOptions,
        headerRight: () => (
          <TouchableHighlight
            onPress={handleLogoutPress}
            style={{ paddingHorizontal: 16 }}
          >
            <Ionicons
              name="log-out-outline"
              size={24}
              color={theme.colors.white[500]}
            />
          </TouchableHighlight>
        ),
      }}
    >
      <Screen
        component={DashboardScreen}
        name="Dashboard"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Screen
        component={ProfileScreen}
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
