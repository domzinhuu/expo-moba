import { StyleSheet } from "react-native";
import { theme } from "../../theme/base";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
  },
  logo: {
    width: 96,
    height: 96,
  },
  loginContent: {
    alignItems: "center",
  },
  loginButton: {
    padding: 16,
    backgroundColor:theme.colors.primary[500],
    width:'100%',
    borderRadius:8,
    gap:8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical:theme.space[32]
  },
});
