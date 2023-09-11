import { StyleSheet } from "react-native";
import { theme } from "../../theme/base";

export const styles = StyleSheet.create({
  container: {
    height:500,
    borderRadius:6,
    flex:1,
  },
  acquirerContent:{
    
  },
  newAcquirer: {
    backgroundColor: theme.colors.primary[500],
    width: 200,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  item: {
    backgroundColor:theme.colors.white[500],
    borderRadius: 6,
    marginTop: 16,
  },
  itemHeading: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    padding: 16,
    justifyContent: "space-between",
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    backgroundColor: theme.colors.primary[500],
  },

  bodyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  itemBody: {
    gap: 4,
  },

  itemAction: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.colors.white[300],
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  actionButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  formAction: {
    flexDirection: "row",
    paddingTop: 48,
    justifyContent: "center",
    gap: 32,
  },
  formButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    gap: 16,
    borderRadius: 6,
  },
});
