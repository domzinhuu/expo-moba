import { StatusBar, StyleSheet } from "react-native";
import { theme } from "./src/theme/base";
import { Routes } from "./src/routes";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <>
      <GluestackUIProvider config={config.theme}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={"transparent"}
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </GluestackUIProvider>
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
