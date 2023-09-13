import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme }  from "src/theme/base"
import { TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DashboardScreen } from "../screens/Dashboard";
import { ProfileScreen } from "../screens/Profile";
import { config } from "@gluestack-ui/themed";

const { Navigator, Screen } = createBottomTabNavigator();
const screenOptions = {
  headerTintColor: config.theme.tokens.colors.white,
  tabBarInactiveTintColor: config.theme.tokens.colors.white,
  tabBarActiveTintColor: config.theme.tokens.colors.secondary500,
  tabBarStyle: {
    backgroundColor: config.theme.tokens.colors.primary500,
  },
  headerStyle: {
    backgroundColor: config.theme.tokens.colors.primary500,
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
              color={config.theme.tokens.colors.white}
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
