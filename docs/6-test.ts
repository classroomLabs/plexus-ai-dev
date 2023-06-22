import { calculateDiscountedPrice, formatCurrency, validateNumber } from "./5-code";

describe("validateNumber", () => {
  test("should return true for valid number within range", () => {
    expect(validateNumber("100", 0, 1000)).toBe(true);
  });

  test("should return false for invalid number", () => {
    expect(validateNumber("abc", 0, 1000)).toBe(false);
  });

  test("should return false for number outside range", () => {
    expect(validateNumber("5000", 0, 1000)).toBe(false);
  });
});

describe("calculateDiscountedPrice", () => {
  test("should calculate discounted price correctly", () => {
    expect(calculateDiscountedPrice(100, 20)).toBe(80);
    expect(calculateDiscountedPrice(50, 10)).toBe(45);
  });
});

describe("formatCurrency", () => {
  test("should format currency correctly", () => {
    expect(formatCurrency(80)).toBe("80.00");
    expect(formatCurrency(45)).toBe("45.00");
  });
});
