export const formatCurrency = (value: number): string => {
  if (!value) return "R$ 0,00";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const parseCurrency = (value: string): number => {
  // Remove o símbolo da moeda e espaços
  const cleaned = value.replace(/R\$\s?/g, "");

  // Substitui vírgula por ponto para decimal
  const normalized = cleaned.replace(/\./g, "").replace(",", ".");

  // Converte para número
  return Number(normalized);
};

// Nova função para manipular a entrada do usuário
export const handleCurrencyInput = (value: string): string => {
  // Remove tudo que não é número ou vírgula
  const cleaned = value.replace(/[^\d,]/g, "");

  // Se não houver números, retorna zero formatado
  if (!cleaned) return "R$ 0";

  // Separa os números antes e depois da vírgula
  const [integerPart = "", decimalPart = ""] = cleaned.split(",");

  // Remove zeros à esquerda do inteiro
  const normalizedInteger = integerPart.replace(/^0+/, "") || "0";

  // Limita os decimais a 2 dígitos
  const normalizedDecimal = decimalPart.slice(0, 2);

  // Formata o número com separador de milhares
  const formattedInteger = Number(normalizedInteger).toLocaleString("pt-BR");

  // Se tiver parte decimal, adiciona
  if (normalizedDecimal) {
    return `R$ ${formattedInteger},${normalizedDecimal}`;
  }

  // Se o último caractere era vírgula, mantém
  if (cleaned.endsWith(",")) {
    return `R$ ${formattedInteger},`;
  }

  return `R$ ${formattedInteger}`;
};
