import { StatusBar, StyleSheet } from "react-native"
import { theme } from "@theme/base"
import { GluestackUIProvider, config } from "@gluestack-ui/themed"
import { Routes } from "@routes/index"
import { AuthProvider } from "@contexts/AuthContext"
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { Loading } from "@components/Loading"

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <GluestackUIProvider config={config.theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={"transparent"}
      />
      <AuthProvider>{fontLoaded ? <Routes /> : <Loading />}</AuthProvider>
    </GluestackUIProvider>
  )
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
})
