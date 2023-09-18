import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AppVersion } from "../../shared/AppVersion";
import { styles } from "./styles";
import { useCustomToast } from "@hooks/useCustomToast";
import { Paragraph } from "@components/Paragraph";
import { InputLogin } from "./components/InputLogin";
import { LoginButton } from "./components/LoginButton";
import { CustomLink } from "@components/Link";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppErrors";

export function LoginScreen() {
  const navigation = useNavigation();
  const toast = useCustomToast();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmailLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    navigation.navigate("createAccount");
  };

  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      setIsLoading(false);
      const isAppError = AppError.isAppError(error);
      const title = isAppError
        ? (error as AppError).message
        : "Não foi possivel realizar o login. Tente novamente mais tarde.";

      toast.showError(title);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 16,
        }}
      >
        <View style={styles.loginContent}>
          <Image
            source={require("../../../assets/logo.png")}
            alt="Login screen"
            style={styles.logo}
            resizeMode="contain"
          />

          <Paragraph size="md">
            Faça login para ter acesso a plataforma
          </Paragraph>

          <View style={styles.formGroups}>
            <InputLogin
              placeholder="E-mail"
              keyBoardType="email-address"
              value={email}
              onUpdate={setEmailLogin}
            />
            <InputLogin
              placeholder="Senha"
              isPassword={true}
              value={password}
              onUpdate={setPassword}
            />
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoginButton isLoading={isLoading} onClick={handleLogin} />
            <CustomLink text="Esqueci minha senha" variant="primary" />
          </View>

          <View style={styles.newAccount}>
            <Paragraph>Não possui conta?</Paragraph>
            <CustomLink
              text="cadastre-se aqui"
              variant="primary"
              onPress={handleCreateAccount}
            />
          </View>

          <AppVersion />
        </View>
      </View>
    </View>
  );
}
