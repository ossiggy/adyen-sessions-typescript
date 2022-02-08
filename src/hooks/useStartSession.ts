import { useState, useEffect } from "react";
import { useMemoCompare } from "./useMemoCompare";
import { compareFormData } from "../helpers";
import { MERCHANT_ACCOUNT, RETURN_URL_BASE } from "../config";

type SessionConfig = {
  merchantAccount: string;
  amount: {
    value: number,
    currency: string
  };
  returnUrl: string;
  reference: string;
  countryCode: string;
}

export const useStartSession = (options: {
  value: number;
  currency: string;
  countryCode: string;
  component: string | undefined;
}) => {
  console.log("Starting session with params", options);
  const [sessionInfo, setSessionInfo] = useState<any>(null);

  const opts = useMemoCompare(options, compareFormData);

  useEffect(() => {
    const paymentData: SessionConfig = {
      merchantAccount: MERCHANT_ACCOUNT,
      amount: {
        value: options.value * 100,
        currency: options.currency,
      },
      returnUrl: `${RETURN_URL_BASE}/${options.component}`,
      reference: `${Math.floor(Math.random() * 100000000)}`,
      countryCode: options.countryCode,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    };

    const startSession = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/startSession",
          requestOptions
        );

        const parsed = await response.json();
        setSessionInfo(parsed);
      } catch (err) {
        if (err && typeof err === "object") {
          console.error("Error", err);
        } else {
          console.error("Something went wrong");
        }
      }
    };

    startSession();
  }, [opts]);

  return [sessionInfo];
};
