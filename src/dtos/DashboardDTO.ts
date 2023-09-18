import { Comerce } from "@models/comerce";
import { DashboardConsolidated, DashboardData, Organization } from "@models/dashboard";
import { sumBy } from "lodash";

export function getComerceList(organizations:Organization[]): Comerce[] {
  const consolidate = getConsolidateData(organizations);

  const comerce: Comerce[] = consolidate.map((item) => {
    return {
      ecDoc: item.document,
      ecName: item.name,
      blockedAmount: item.totalPayValue,
      freeAmount: item.totalReceiveValue,
      totalValue: item.totalValue,
    };
  });

  return comerce;
}

export function getConsolidateData(organizations:Organization[]): DashboardConsolidated[]{
  const consolidate = organizations.map((org: any) => {
    const acquirers = org.acquirers.map((acquirer: any) => {
      acquirer.valorPagar = sumBy(acquirer.bandeiras, "blockedAmount");
      acquirer.valorReceber = sumBy(acquirer.bandeiras, "amountToReceive");
      acquirer.valorTotal = acquirer.valorReceber + acquirer.valorPagar;
      return acquirer;
    });
    const totalPayValue = sumBy(acquirers, "valorPagar");
    const totalReceiveValue = sumBy(acquirers, "valorReceber");
    const totalValue = sumBy(acquirers, "valorTotal");

    return {
      document: org.document,
      name: org.name,
      totalPayValue,
      totalReceiveValue,
      totalValue,
      acquirers: org.acquirers,
    };
  });

  return consolidate;
}