import { StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../../theme/base";
import { Ionicons } from "@expo/vector-icons";
import { Paragraph } from "../../../components/Paragraph";

interface LoginButtonProps {
  onClick: () => void;
}
export function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      accessibilityLabel="Botão para fazer login"
      style={styles.loginButton}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <Ionicons color={"#FFFFFF"} size={24} name="log-in" />
        <Paragraph size="md" variant="white">
          Conectar
        </Paragraph>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    padding: 16,
    backgroundColor: theme.colors.primary[500],
    width: "100%",
    borderRadius: 8,
    marginVertical: theme.space[32],
  },
  buttonContent: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
