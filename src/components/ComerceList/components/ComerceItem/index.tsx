import { View } from "react-native";
import { styles } from "./styles";
import { Paragraph } from "../../../Paragraph";
import { formatCurrency } from "../../../../utils/formatters";

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
  return (
    <View style={styles.cardBody}>
      <View>
        <View style={styles.tableRowHeader}>
          <Paragraph size="md">{ecName}</Paragraph>
          <Paragraph size="md" weight={700}>
            {ecDoc}
          </Paragraph>
        </View>
        <View style={styles.tableRow}>
          <Paragraph size="md">Valor total:</Paragraph>
          <Paragraph size="md" weight={700}>
            {formatCurrency(totalValue)}
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
      </View>
    </View>
  );
}
