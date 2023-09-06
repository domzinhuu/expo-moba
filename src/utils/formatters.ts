export const formatCurrency = (value: number): string => {
  const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return intl.format(value);
};
