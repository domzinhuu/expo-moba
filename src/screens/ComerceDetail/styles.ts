import { theme } from "@theme/base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customHeader: {
    backgroundColor: theme.colors.primary[500],
    borderBottomEndRadius: 56,
  },
  backButton: {
    paddingLeft: 24,
    paddingTop: 64,
  },
  headerContent: {
    paddingLeft: 24,
    paddingTop: 24,
  },
  detailContent: {
    flex: 1,
  },
  detailAcquireItem: {
    justifyContent: "center",
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    height: 96,
    padding: 24,
  },
  acquirerContainer: {
    flex: 1,
    backgroundColor: theme.colors.white[500],
    padding: 24,
    paddingBottom:0,
    borderTopStartRadius: 56,
    shadowOpacity: 0.2,
    elevation:20,
    shadowRadius: 3,
  },
  acquirerItem:{
    marginBottom:8
  }
});
