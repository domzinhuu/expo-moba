import { View } from "react-native";
import Box from "../../shared/Box";
import { Paragraph } from "../Paragraph";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme/base";
import { formatCurrency } from "../../utils/formatters";

interface ScheduledValueCardProps {
  totalValue?: number;
  limitDate?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export function ScheduledValueCard({
  totalValue = 0,
  limitDate = "",
  icon,
}: ScheduledValueCardProps) {
  return (
    <Box.Container>
      <Box.Content>
        <Paragraph size="md" weight={700}>
          {formatCurrency(totalValue)}
        </Paragraph>
        <View style={{ flexDirection: "row" }}>
          <Paragraph>Total a receber até: </Paragraph>
          <Paragraph weight={700}>{limitDate}</Paragraph>
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
