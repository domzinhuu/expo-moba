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
    width: 196,
    height: 196,
    marginTop:48
  },
  loginContent: {
    alignItems: "center",
    justifyContent:"space-between",
    flex:1
  },
  formGroups:{
    width:'100%'
  },
  newAccount: {
    flexDirection: "row",
    gap: 4,
    marginTop: theme.space[32],
  },
});
