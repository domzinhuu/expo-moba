import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "@theme/base";
import { TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DashboardScreen } from "../screens/Dashboard";
import { ProfileScreen } from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();
const screenOptions = {
  headerTintColor: "$white",
  tabBarInactiveTintColor: "$white",
  tabBarActiveTintColor: "$secondary500",
  tabBarStyle: {
    backgroundColor: "$primary500",
  },
  headerStyle: {
    backgroundColor: "primary500",
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
            <Ionicons name="log-out-outline" size={24} color={"$white"} />
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
