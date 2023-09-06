import { Ionicons } from "@expo/vector-icons";
import Box from "../../shared/Box";
import { theme } from "../../theme/base";
import { Paragraph } from "../Paragraph";
import { View } from "react-native";
import { formatCurrency } from "../../utils/formatters";

interface NextPaymentsCardProps {
  currentPaymentDate?: string;
  currentPaymentValue?: number;
  nextPaymentDate?: string;
  nextPaymentValue?: number;
  icon?: keyof typeof Ionicons.glyphMap;
}

export function NextPaymentsCard({
  currentPaymentDate = "",
  currentPaymentValue = 0,
  nextPaymentDate = "",
  nextPaymentValue = 0,
  icon,
}: NextPaymentsCardProps) {
  return (
    <Box.Container>
      <Box.Content>
        <Paragraph size="md" weight={700}>
          Pagamento Previstos
        </Paragraph>
        <View style={{ flexDirection: "row" }}>
          <Paragraph>{currentPaymentDate}: </Paragraph>
          <Paragraph weight={700}>
            {formatCurrency(currentPaymentValue)}
          </Paragraph>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Paragraph>{nextPaymentDate}: </Paragraph>
          <Paragraph weight={700}>{formatCurrency(nextPaymentValue)}</Paragraph>
        </View>
      </Box.Content>
      {icon && (
        <Box.IconContent>
          <Ionicons name={icon} size={32} color={theme.colors.white[500]} />
        </Box.IconContent>
      )}
    </Box.Container>
  );
}
