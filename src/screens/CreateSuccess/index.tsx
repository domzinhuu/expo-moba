import { Paragraph } from "@components/Paragraph"
import { Title } from "@components/Title"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "@gluestack-ui/themed"
import { theme } from "@theme/base"
import { Image, StyleSheet, Text, View } from "react-native"
import logo from "@assets/logo.png"
import { useNavigation } from "@react-navigation/native"

export function CreateSuccessScreen() {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate("login")
  }
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 16,
            gap: 8,
            width: "100%",
          }}
        >
          <Image
            style={styles.logo}
            source={logo}
            alt="logo"
            resizeMode="contain"
          />
          <Title variant="primary">
            Seu cadastro foi realizado com sucesso!
          </Title>
        </View>
        <View style={{ gap: 16, marginTop: 24,padding:8 }}>
          <Paragraph size="md">
            Agora vamos avaliar as informações que você nos passou e organizar
            tudo para que você possa acompanhar sua agenda. Esse processo leva
            em média até 24 horas. Fique tranquilo, nós vamos te enviar um
            e-mail assim que terminarmos.
          </Paragraph>

          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <Paragraph>Prazo de analise:</Paragraph>
            <Text style={styles.waitingTime}>até 24 horas</Text>
          </View>
        </View>
      </View>
      <Button onPress={goToLogin} backgroundColor="$purple600">
        <Ionicons name="arrow-back" color={theme.colors.white[500]} size={24} />
        <Paragraph variant="white">Ir para Login</Paragraph>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 36,
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.white[500],
  },
  logo: {
    width: 64,
    height: 64,
  },
  waitingTime: {
    backgroundColor: theme.colors.secondary[500],
    fontWeight: "700",
    padding: 8,
    borderRadius: 6,
    color: theme.colors.secondary[700],
  },
})
