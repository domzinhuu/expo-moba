export type AcquirerBrand = {
  amountToReceive: number;
  anticipatedAmount: number;
  blockedAmount: number;
  freeAmount: number;
  globalAmount: number;
  name: string;
  totalAmount: number;
};

export type Acquirer = {
  bandeiras: AcquirerBrand[];
  name: string;
  document: string;
  ultimoPagamento: string;
  valorPagar: number;
  valorReceber: number;
  valorTotal: number;
};

export type Organization = {
  acquirers: Acquirer[];
  document: string;
  name: string;
};

export type DashboardData = {
  agendaFutura: number;
  ultimoPagamento: string;
  organizations: Organization[];
  atual: { amount: number; date: string };
  proximo: { amount: number; date: string };
};

export type ConsolidateAcquirer = {
  name: string;
  document: string;
  ultimoPagamento: string;
  valorPagar: number;
  valorReceber: number;
  valorTotal: number;
};

export type DashboardConsolidated = {
  document: string;
  name: string;
  totalPayValue: number;
  totalReceiveValue: number;
  totalValue: number;
  acquirers: Acquirer[];
};
