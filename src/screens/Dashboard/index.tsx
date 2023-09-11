import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ComerceList } from "../../components/ComerceList";
import { useLayoutEffect, useState } from "react";
import { Comerce } from "../../models/comerce";
import { ScheduledValueCard } from "../../components/ScheduledValueCard";
import { NextPaymentsCard } from "../../components/NextPaymentsCard";
import { mockComerces } from "../../utils/mocks";

export function DashboardScreen() {
  const [comerces, setComerces] = useState<Comerce[]>(mockComerces);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScheduledValueCard totalValue={46043.68} icon="trending-up" />
        <NextPaymentsCard
          currentPaymentDate="02/09/2023"
          currentPaymentValue={2500.94}
          nextPaymentDate="04/09/2023"
          nextPaymentValue={1980.54}
          icon="calendar-outline"
        />
        <ComerceList
          headerIcon="filter"
          headerTitle="Comércios"
          comerces={comerces}
        />
      </View>
    </ScrollView>
  );
}
