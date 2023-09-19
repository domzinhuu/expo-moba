import { Paragraph } from "@components/Paragraph"
import { View } from "@gluestack-ui/themed"
import { Acquirer, ConsolidateAcquirer } from "@models/dashboard"
import { theme } from "@theme/base"
import { formatCurrency, formatDate } from "@utils/formatters"
import { StyleSheet } from "react-native"

interface AcquirerItemProps {
  acquirer: Acquirer
}

export function AcquirerItem({ acquirer }: AcquirerItemProps) {
  return (
    <View style={styles.acquirerItem}>
      <View style={styles.acquirerItemHeader}>
        <Paragraph variant="white" weight={700}>
          {acquirer.name}
        </Paragraph>
        <View style={{ alignItems: "flex-end" }}>
          <Paragraph variant="white">Último pagamento</Paragraph>
          <Paragraph variant="white" weight={700}>
            {formatDate(acquirer.ultimoPagamento)}
          </Paragraph>
        </View>
      </View>

      <View style={styles.acquirerItemBody}>
        <View style={styles.acquirerItemBodyRow}>
          <Paragraph>Valor a receber</Paragraph>
          <Paragraph>{formatCurrency(acquirer.valorReceber)}</Paragraph>
        </View>
        <View style={styles.acquirerItemBodyRow}>
          <Paragraph variant="danger">Valor comprometido</Paragraph>
          <Paragraph variant="danger">
            - {formatCurrency(acquirer.valorPagar)}
          </Paragraph>
        </View>
        <View style={styles.acquirerItemBodyLastRow}>
          <Paragraph weight={700}>Valor total</Paragraph>
          <Paragraph size="md" weight={700}>{formatCurrency(acquirer.valorTotal)}</Paragraph>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  acquirerItem: {
    marginBottom: 8,
  },
  acquirerItemHeader: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    backgroundColor: theme.colors.primary[500],
  },
  acquirerItemBody: {
    padding: 8,
    backgroundColor: theme.colors.gray[300],
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderColor: theme.colors.lightGray[500],
  },

  acquirerItemBodyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.white[700],
  },

  acquirerItemBodyLastRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
})
