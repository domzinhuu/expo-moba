import { StyleSheet } from "react-native";
import { theme } from "../../theme/base";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 96,
    height: 96,
  },
  loginContent: {
    alignItems: "center",
  },
  newAccount: {
    flexDirection: "row",
    gap: 4,
    marginTop: theme.space[32],
  },
});
