/**
 * The parameters for `formatPrice`.
 */
export interface FormatPriceProps {
  amount: number;
  currency: string;
  locale?: string;
}

/**
 * Formats a number into a localized currency string.
 *
 * @param amount    the numeric value to format
 * @param currency  the ISO 4217 currency code, e.g. "EUR", "USD"
 * @param locale    the BCP 47 locale, defaults to "pt-PT"
 */
export function formatPrice({ amount, currency, locale = 'pt-PT' }: FormatPriceProps): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
