import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme/base";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white[500],
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    width:'100%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  cardContent: {
    gap: 4,
    width:'100%'
  }
});

const Card = {
  Container: ({ children }: PropsWithChildren) => (
    <View style={styles.card}>{children}</View>
  ),
  Content: ({ children }: PropsWithChildren) => (
    <View style={styles.cardContent}>{children}</View>
  )
};

export default Card;
