import { Image, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Title } from "../../components/Title";
import { styles } from "./styles";
import Box from "../../shared/Box";
import { Paragraph } from "../../components/Paragraph";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../shared/Card";
import { theme } from "../../theme/base";
import { LinearGradient } from "expo-linear-gradient";

export function Login() {
  return (
    <LinearGradient
    start={{x:1,y:0.3}}
      end={{ x: 1, y: 1.1 }}

      colors={[theme.colors.primary[500], theme.colors.secondary[500]]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primary[500],
        padding: 16,
      }}
    >
      <Card.Container>
        <Card.Content>
          <View style={styles.loginContent}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Paragraph>Faça login para ter acesso a plataforma</Paragraph>
            <TextInput
              placeholder="E-mail"
              style={{
                width: "100%",
                paddingHorizontal: 8,
                height: 48,
                fontSize: 16,
                borderBottomColor: theme.colors.primary[300],
                borderBottomWidth: 1,
                marginTop: theme.space[32],
              }}
            />
            <TextInput
              placeholder="Senha"
              secureTextEntry={true}
              style={{
                width: "100%",
                paddingHorizontal: 8,
                paddingVertical: 16,
                fontSize: 16,
                borderBottomColor: theme.colors.primary[300],
                borderBottomWidth: 1,
              }}
            />

            <TouchableHighlight style={styles.loginButton}>
              <>
                <Ionicons color={"#FFFFFF"} size={24} name="log-in" />
                <Paragraph size="md" variant="white">
                  Conectar
                </Paragraph>
              </>
            </TouchableHighlight>
            <Paragraph variant="primary">Esqueci minha senha</Paragraph>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                marginTop: theme.space[32],
              }}
            >
              <Paragraph>Não possui conta?</Paragraph>
              <Paragraph variant="primary">cadastre-se aqui</Paragraph>
            </View>
            <Text style={{ fontSize: 10 }}>0.1.28</Text>
          </View>
        </Card.Content>
      </Card.Container>
    </LinearGradient>
  );
}
