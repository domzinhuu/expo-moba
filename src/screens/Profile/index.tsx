import { View } from "@gluestack-ui/themed";
import { Title } from "../../components/Title";
import { styles } from "./styles";
import { Paragraph } from "@components/Paragraph";
import { Ionicons } from "@expo/vector-icons";

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Ionicons style={{marginBottom:24}} size={36} name="settings-outline" />
      <Title>Em desenvolvimento</Title>
      <Paragraph>Está tela está em desenvolvimento</Paragraph>
    </View>
  );
}
