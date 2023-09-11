import { StyleSheet } from "react-native";
import { theme } from "../../theme/base";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  stepTitle: {
    padding: 24,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: "transparent",
    marginTop: 48,
    width: "100%",
  },
  actionBottom: {
    flexDirection: "row",
    gap: 4,
    padding: 8,
    paddingVertical: 16,
    backgroundColor: "transparent",
  },
  stepContent: {
    padding: 16,
    width: "100%",
    backgroundColor: theme.colors.white[500],
    borderRadius: 8,
  },
});
