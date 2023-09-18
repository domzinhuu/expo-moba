import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Paragraph } from "../../../Paragraph";
import { formatCurrency, formatDocument } from "../../../../utils/formatters";
import { useNavigation } from "@react-navigation/native";
import { StackNavigatorParamList } from "@screens/Dashboard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ComerceItemProps {
  ecName: string;
  ecDoc: string;
  totalValue: number;
  freeAmount: number;
  blockedAmount: number;
}

export function ComerceItem({
  ecName,
  ecDoc,
  totalValue,
  freeAmount,
  blockedAmount,
}: ComerceItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigatorParamList>>();

  function handleDetailNavigation() {
    navigation.navigate("comerceDetail", { ecDocument: ecDoc });
  }

  return (
    <TouchableOpacity onPress={handleDetailNavigation}>
      <View style={styles.cardBody}>
        <View>
          <View style={styles.tableRowHeader}>
            <Paragraph size="md">{ecName}</Paragraph>
            <Paragraph size="md" weight={700}>
              {formatDocument(ecDoc)}
            </Paragraph>
          </View>
          <View style={styles.tableRow}>
            <Paragraph size="md">Total a receber:</Paragraph>
            <Paragraph size="md" weight={700}>
              {formatCurrency(freeAmount)}
            </Paragraph>
          </View>
          <View style={styles.tableRow}>
            <Paragraph size="md">Total comprometido:</Paragraph>
            <Paragraph size="md" weight={700} variant="danger">
              - {formatCurrency(blockedAmount)}
            </Paragraph>
          </View>
          <View style={styles.tableRow}>
            <Paragraph size="md">Valor total:</Paragraph>
            <Paragraph size="md" weight={700}>
              {formatCurrency(totalValue)}
            </Paragraph>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
