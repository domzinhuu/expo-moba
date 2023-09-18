import { Title } from "@components/Title";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme/base";
import { Paragraph } from "@components/Paragraph";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigatorParamList } from "@screens/Dashboard";
import { useEffect, useState } from "react";
import { useDashboard } from "@hooks/useDashboard";
import {
  Acquirer,
  ConsolidateAcquirer,
  DashboardConsolidated,
} from "@models/dashboard";
import { Loading } from "@components/Loading";
import { formatCurrency, formatDocument } from "@utils/formatters";
import { AcquirerItem } from "./components/AcquirerItem";

export function ComerceDetail() {
  const { goBack } = useNavigation();
  const route = useRoute<RouteProp<StackNavigatorParamList, "comerceDetail">>();

  const [selectedComerce, setSelectedComerce] = useState<DashboardConsolidated>(
    {} as DashboardConsolidated
  );

  const [isLoadingData, setIsLoadingData] = useState(true);
  const { getSelectedComerce } = useDashboard();

  useEffect(() => {
    const result = getSelectedComerce(route.params.ecDocument);
    if (result) {
      setSelectedComerce(result);
    }
    setIsLoadingData(false);
  }, [route.params]);

  function handleGoBack() {
    goBack();
  }

  if (isLoadingData) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.customHeader}>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons
              size={24}
              name="arrow-back"
              color={theme.colors.white[500]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Title variant="white">{selectedComerce.name}</Title>
          <Paragraph size="md" variant="secondary">
            {formatDocument(selectedComerce.document)}
          </Paragraph>
        </View>
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 36,
            alignItems: "flex-end",
          }}
        >
          <Paragraph variant="white" weight={700}>
            Valor total
          </Paragraph>
          <Title variant="secondary">
            {formatCurrency(selectedComerce.totalValue)}
          </Title>
        </View>
      </View>

      <View style={styles.detailContent}>
        <View style={styles.detailAcquireItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Paragraph>A receber</Paragraph>
              <Paragraph size="md" weight={700}>
                {formatCurrency(selectedComerce.totalReceiveValue)}
              </Paragraph>
            </View>
            <View>
              <Paragraph>Valor comprometido</Paragraph>
              <Paragraph size="md" weight={700}>
                {formatCurrency(selectedComerce.totalPayValue)}
              </Paragraph>
            </View>
          </View>
        </View>

        <View style={styles.acquirerContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {!selectedComerce && (
              <Paragraph>Não há dados no momento.</Paragraph>
            )}

            {selectedComerce.acquirers.map((acquirer: Acquirer, index) => (
              <AcquirerItem key={acquirer.document} acquirer={acquirer} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
