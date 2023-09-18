import { getComerceList, getConsolidateData } from "@dtos/DashboardDTO";
import { useAuth } from "@hooks/useAuth";
import { useCustomToast } from "@hooks/useCustomToast";
import { Comerce } from "@models/comerce";
import {
  DashboardConsolidated,
  DashboardData,
  Organization,
} from "@models/dashboard";
import { api } from "@services/api";
import { AppError } from "@utils/AppErrors";
import { sumBy } from "lodash";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type ComerceInfo = { amount: number; date: string };

export interface DashboardContextProps {
  scheduledValue: number;
  limitReceiveDate: string;
  currentPaymentInfo: ComerceInfo;
  nextPaymentInfo: ComerceInfo;
  isLoadingData: boolean;
  comerceList: Comerce[];
  currentFilter: string;
  getSelectedComerce: (document: string) => DashboardConsolidated | null;
  getFilteredData: (start?: string, end?: string) => any;
  toggleFilterType: (type: string) => any;
}
export const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps
);

export function DashboardProvider({ children }: PropsWithChildren) {
  const [consolidate, setConsolidate] = useState<DashboardConsolidated[]>([]);
  const [scheduledValue, setScheduledValue] = useState<number>(0);
  const [limitReceiveDate, setLimitDate] = useState<string>("");
  const [comerceList, setComerceList] = useState<Comerce[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [currentFilter, setCurrentFilter] = useState("");

  const [currentPaymentInfo, setCurrentPaymentInfo] = useState<ComerceInfo>(
    {} as ComerceInfo
  );
  const [nextPaymentInfo, setNextPaymentInfo] = useState<ComerceInfo>(
    {} as ComerceInfo
  );

  const toast = useCustomToast();
  const { signOut } = useAuth();

  async function fetchDashboardData(dateFilter?: {
    start: string;
    end: string;
  }) {
    try {
      let url = "/resume";
      if (dateFilter) {
        url += `?dataInicio=${dateFilter.start}&dataFim=${dateFilter.end}`;
      }
      const response = (await api.get(url)) as DashboardData;

      setComerceList(() => getComerceList(response.organizations));
      setConsolidate(() => getConsolidateData(response.organizations));

      if (response.agendaFutura) {
        setScheduledValue(response.agendaFutura);
      } else {
        const updatedConsolidate = getConsolidateData(response.organizations);
        const sumTotal = sumBy(updatedConsolidate, "totalReceiveValue");

        setScheduledValue(sumTotal);
      }

      if (response.ultimoPagamento) {
        setLimitDate(response.ultimoPagamento);
      }

      if (response.atual) {
        setCurrentPaymentInfo(response.atual);
      }

      if (response.proximo) {
        setNextPaymentInfo(response.proximo);
      }
      setIsLoadingData(false);
    } catch (error: any) {
      const isAppError = AppError.isAppError(error);

      if (isAppError && error.code === 401) {
        toast.showError("Sessão expirada, faça o login novamente.");
        signOut();
        return;
      }

      console.error(error);
      const title = isAppError
        ? error.message
        : "Não foi possivel carregar os dados";

      toast.showError(title);
    }
  }

  function getSelectedComerce(document: string) {
    return consolidate.find((item) => item.document === document) || null;
  }

  function toggleFilterType(type: string) {
    setCurrentFilter(type);
  }

  async function getFilteredData(start?: string, end?: string) {
    setIsLoadingData(true);
    if (start && end) {
      await fetchDashboardData({ start, end });
    } else {
      await fetchDashboardData();
    }
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        comerceList,
        currentPaymentInfo,
        isLoadingData,
        nextPaymentInfo,
        scheduledValue,
        limitReceiveDate,
        currentFilter,
        toggleFilterType,
        getSelectedComerce,
        getFilteredData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
