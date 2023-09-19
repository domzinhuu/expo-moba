import { TouchableHighlight, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Paragraph } from "../../../Paragraph"
import { formatCurrency, formatDocument } from "../../../../utils/formatters"
import { useNavigation } from "@react-navigation/native"
import { StackNavigatorParamList } from "@screens/Dashboard"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Divider } from "@gluestack-ui/themed"

interface ComerceItemProps {
  ecName: string
  ecDoc: string
  totalValue: number
  freeAmount: number
  blockedAmount: number
}

export function ComerceItem({
  ecName,
  ecDoc,
  totalValue,
  freeAmount,
  blockedAmount,
}: ComerceItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigatorParamList>>()

  function handleDetailNavigation() {
    navigation.navigate("comerceDetail", { ecDocument: ecDoc })
  }

  return (
    <TouchableOpacity onPress={handleDetailNavigation}>
      <View style={styles.cardBody}>
        <View>
          <View style={styles.tableRowHeader}>
            <Paragraph>{ecName}</Paragraph>
            <Paragraph size="md" weight={700}>
              {formatDocument(ecDoc)}
            </Paragraph>
            <Divider my={4} bgColor="$purple100"/>
          </View>
          <View style={styles.tableRow}>
            <Paragraph>Total a receber:</Paragraph>
            <Paragraph>{formatCurrency(freeAmount)}</Paragraph>
          </View>
          <View style={styles.tableRow}>
            <Paragraph>Total comprometido:</Paragraph>
            <Paragraph variant="danger">
              - {formatCurrency(blockedAmount)}
            </Paragraph>
          </View>
          <View style={styles.tableRow}>
            <Paragraph weight={700}>Valor total:</Paragraph>
            <Paragraph size="md" weight={700}>{formatCurrency(totalValue)}</Paragraph>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
