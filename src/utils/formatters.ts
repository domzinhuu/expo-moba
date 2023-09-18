const dateFormat = new Intl.DateTimeFormat("pt-BR", { timeZone: "GMT" });

export const formatCurrency = (value: number): string => {
  const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return intl.format(value);
};

export const formatDocument = (value: string = ""): string => {
  if (value.replace(/\D/g, "").length <= 11) {
    return maskToCpf(value);
  }

  return maskToCnpj(value);
};

export const maskToCnpj = (value: string = ""): string => {
  return value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const maskToCpf = (value: string = ""): string => {
  return value
    .replace(/\D+/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const formatDate = (date: string): string => {
  if (date && !Number.isNaN(new Date(date).getTime())) {
    const jsDate = new Date(date);
    return dateFormat.format(jsDate);
  }

  return "";
};