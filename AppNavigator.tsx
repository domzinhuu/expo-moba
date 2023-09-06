import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "./src/screens/Dashboard";
import { Profile } from "./src/screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "./src/theme/base";
import { TouchableHighlight, View } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const handleLogoutPress = () => {
    console.log("Sair pressionado");
  };

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
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={size} color={color} />
            ),
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle" size={size} color={color} />
            ),
          }}
          name="Perfil"
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
