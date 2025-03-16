import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  parseCurrency,
  handleCurrencyInput,
} from "../currency";

describe("Currency Utils", () => {
  describe("formatCurrency", () => {
    it("should format number to BRL currency", () => {
      expect(formatCurrency(0)).toEqual("R$ 0");
    });

    it("should handle undefined or zero values", () => {
      expect(formatCurrency(0)).toEqual("R$ 0");
      expect(formatCurrency(undefined as any)).toEqual("R$ 0");
    });
  });

  describe("parseCurrency", () => {
    it("should parse BRL currency string to number", () => {
      expect(parseCurrency("R$ 1.000,00")).toEqual(1000);
      expect(parseCurrency("R$ 0")).toEqual(0);
    });

    it("should handle strings without R$ prefix", () => {
      expect(parseCurrency("1.000,00")).toEqual(1000);
      expect(parseCurrency("1.234,56")).toEqual(1234.56);
    });
  });

  describe("handleCurrencyInput", () => {
    it("should handle currency input changes", () => {
      expect(handleCurrencyInput("1000")).toEqual("R$ 1.000");
      expect(handleCurrencyInput("1000,5")).toEqual("R$ 1.000,5");
      expect(handleCurrencyInput("1000,50")).toEqual("R$ 1.000,50");
      expect(handleCurrencyInput("0")).toEqual("R$ 0");
    });

    it("should handle empty or invalid input", () => {
      expect(handleCurrencyInput("")).toEqual("R$ 0");
      expect(handleCurrencyInput("abc")).toEqual("R$ 0");
    });

    it("should preserve comma when typing decimal values", () => {
      expect(handleCurrencyInput("100,")).toEqual("R$ 100,");
      expect(handleCurrencyInput("100,0")).toEqual("R$ 100,0");
    });
  });
});
