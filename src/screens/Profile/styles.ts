import { theme } from "@theme/base"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[500],
  },
  categoryHeader: {
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: theme.colors.gray[300],
    borderBottomColor: theme.colors.gray[300],
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
  },
  formContent: {
    padding: 16,
  },
  formRow: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    paddingVertical:8
  },
})
