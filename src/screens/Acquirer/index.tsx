import { View } from "@gluestack-ui/themed"
import { styles } from "./styles"
import { Ionicons } from "@expo/vector-icons"
import { Title } from "@components/Title"
import { Paragraph } from "@components/Paragraph"

export function AcquirerScreen() {
  return (
    <View style={styles.container}>
      <Ionicons
        style={{ marginBottom: 24 }}
        size={36}
        name="calculator-outline"
      />
      <Title>Em desenvolvimento</Title>
      <Paragraph>Está tela está em desenvolvimento</Paragraph>
    </View>
  )
}
