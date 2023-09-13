import { StyleSheet } from "react-native";
import { theme }  from "src/theme/base"

export const styles = StyleSheet.create({
  cardHeader: {
    marginTop: 16,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: theme.colors.primary[500],
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
