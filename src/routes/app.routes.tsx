import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/Login";
import CreateUserScreen from "../screens/CreateUser";
import { CreateSuccessScreen } from "@screens/CreateSuccess";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={LoginScreen} />
      <Screen name="createAccount" component={CreateUserScreen} />
      <Screen name="successScreen" component={CreateSuccessScreen} />
    </Navigator>
  );
}
