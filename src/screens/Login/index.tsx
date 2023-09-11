import { Image, View } from "react-native";
import { styles } from "./styles";
import { Paragraph } from "../../components/Paragraph";
import Card from "../../shared/Card";
import { CustomInput } from "../../components/CustomInput";
import { LoginButton } from "./components/LoginButton";
import { CustomLink } from "../../components/Link";
import { AppVersion } from "../../shared/AppVersion";
import { BackgroundGradient } from "../../shared/BackgroundGradient";
import { useNavigation } from "@react-navigation/native";
import { InputLogin } from "./components/InputLogin";

export function LoginScreen() {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate("createAccount")
  };
  return (
    <BackgroundGradient>
      <Card.Container>
        <Card.Content>
          <View style={styles.loginContent}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Paragraph>Faça login para ter acesso a plataforma</Paragraph>

            <InputLogin placeholder="E-mail" />
            <InputLogin placeholder="Senha" isPassword={true} />

            <LoginButton />

            <CustomLink text="Esqueci minha senha" variant="primary" />

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
        </Card.Content>
      </Card.Container>
    </BackgroundGradient>
  );
}
