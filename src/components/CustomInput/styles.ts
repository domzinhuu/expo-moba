import { StyleSheet } from "react-native";
import { theme }  from "src/theme/base"

export const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 16,
    borderBottomColor: theme.colors.gray[500],
    borderBottomWidth: 1,
    backgroundColor:theme.colors.white[500],
    marginBottom:16,
    borderRadius:6
  },
});
