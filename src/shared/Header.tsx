import { Image, StyleSheet, View } from "react-native";
import { Paragraph } from "../components/Paragraph";

export function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.profileInfo}>
        <Paragraph>Bem vindo, </Paragraph>
        <Paragraph variant="primary" weight={700}>
          Maique Rosa{" "}
          {/* Altera para pegar do contexto quando integrar o login */}
        </Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 48,
  },
  profileInfo: {
    flexDirection: "row",
  },
});
