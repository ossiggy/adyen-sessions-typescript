import { FormDataProps } from "../types";

export const compareFormData = (prev: any, next: FormDataProps) => {
  if (!prev) {
    return false;
  };
  
  const valueMatch = prev.value && prev.value === next.value;
  const currencyMatch = prev.currency && prev.currency === next.currency;
  const countryCodeMatch = prev.countryCode && prev.countryCode === next.countryCode;

  return countryCodeMatch && currencyMatch && valueMatch;
};