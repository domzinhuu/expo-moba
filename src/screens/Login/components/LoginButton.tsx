import { StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "@theme/base";
import { Ionicons } from "@expo/vector-icons";
import { Paragraph } from "../../../components/Paragraph";
import { Loading } from "@components/Loading";
import { Spinner } from "@gluestack-ui/themed";

interface LoginButtonProps {
  isLoading?: boolean;
  onClick: () => void;
}
export function LoginButton({ isLoading = false, onClick }: LoginButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      accessibilityLabel="Botão para fazer login"
      style={[
        styles.loginButton,
        {
          backgroundColor: isLoading
            ? "rgba(118, 52, 191,0.4)"
            : theme.colors.primary[500],
        },
      ]}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        {isLoading && <Spinner color={theme.colors.primary[500]} />}
        {!isLoading && (
          <>
            <Ionicons color={"#FFFFFF"} size={24} name="log-in" />
            <Paragraph size="md" variant="white">
              Conectar
            </Paragraph>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    padding: 16,
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
