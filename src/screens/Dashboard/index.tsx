import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { ScheduledValueCard } from "@components/ScheduledValueCard";
import { NextPaymentsCard } from "@components/NextPaymentsCard";
import { ComerceList } from "@components/ComerceList";
import { Loading } from "@components/Loading";
import { useAuth } from "@hooks/useAuth";
import { formatDate } from "@utils/formatters";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComerceDetail } from "@screens/ComerceDetail";
import { theme } from "@theme/base";
import { DashboardProvider } from "@contexts/DashboardContext";
import { useDashboard } from "@hooks/useDashboard";

export type StackNavigatorParamList = {
  comerceDetail: {
    ecDocument: string;
  };
  home: {};
};

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export function DashboardScreen() {
  return (
    <DashboardProvider>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.colors.white[500],
          headerStyle: {
            backgroundColor: theme.colors.primary[500],
          },
        }}
      >
        <Stack.Screen
          name="home"
          options={{ title: "Dashboard" }}
          component={Dashboard}
        ></Stack.Screen>
        <Stack.Screen
          name="comerceDetail"
          options={{ title: "Detalhes", headerShown: false }}
          component={ComerceDetail}
        ></Stack.Screen>
      </Stack.Navigator>
    </DashboardProvider>
  );
}

function Dashboard() {
  const {
    scheduledValue,
    limitReceiveDate,
    comerceList,
    currentPaymentInfo,
    isLoadingData,
    nextPaymentInfo,
  } = useDashboard();

  if (isLoadingData) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScheduledValueCard limitDate={limitReceiveDate} totalValue={scheduledValue} icon="trending-up" />
        <NextPaymentsCard
          currentPaymentDate={formatDate(currentPaymentInfo.date)}
          currentPaymentValue={currentPaymentInfo.amount}
          nextPaymentDate={formatDate(nextPaymentInfo.date)}
          nextPaymentValue={nextPaymentInfo.amount}
          icon="calendar-outline"
        />
        <ComerceList
          headerIcon="filter"
          headerTitle="Comércios"
          comerces={comerceList}
        />
      </View>
    </ScrollView>
  );
}
