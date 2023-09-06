import { StyleSheet } from "react-native";
import { theme } from "../../../../theme/base";

export const styles = StyleSheet.create({
  cardBody: {
    marginTop: 16,
    backgroundColor: theme.colors.white[500],
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  tableRowHeader: {
    padding: 16,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});
