import { StatusBar, StyleSheet } from "react-native";
import { theme } from "./src/theme/base";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { Login } from "./src/screens/Login";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={"transparent"}
      />

      <Login />
      {/* <NavigationContainer>
        <AppNavigator />
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[300],
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white[500],
    gap: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  tabItem: {
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
