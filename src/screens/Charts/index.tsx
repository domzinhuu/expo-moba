import { View } from "react-native";
import { styles } from "./styles";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Ionicons } from "@expo/vector-icons";

export function ChartScreen() {
  return (
    <View style={styles.container}>
      <Ionicons style={{marginBottom:24}} size={36} name="bar-chart-outline" />
      <Title>Em desenvolvimento</Title>
      <Paragraph>Está tela está em desenvolvimento</Paragraph>
    </View>
  );
}
