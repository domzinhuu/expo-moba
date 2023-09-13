import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { theme }  from "@theme/base"

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.white[500],
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  infoContainer: {
    gap: 4,
  },
  iconContainer: {
    backgroundColor: theme.colors.secondary[500],
    padding: 8,
    borderRadius: 8,
  },
});

const Box = {
  Container: ({ children }: PropsWithChildren) => (
    <View style={styles.box}>{children}</View>
  ),
  Content: ({ children }: PropsWithChildren) => (
    <View style={styles.infoContainer}>{children}</View>
  ),
  IconContent: ({ children }: PropsWithChildren) => (
    <View style={styles.iconContainer}>{children}</View>
  ),
};

export default Box;
