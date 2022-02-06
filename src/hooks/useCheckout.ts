import { useState, useEffect } from 'react';
import AdyenCheckout from '@adyen/adyen-web';
import { CLIENT_KEY, ENVIRONMENT } from '../config';

export const useCheckout = (sessionId: string, sessionData: string, redirectResult?: string) => {
  const [checkout, setCheckout] = useState<any>(null);

  useEffect(() => {
    const configuration = {
      environment: ENVIRONMENT, // Change to 'live' for the live environment.
      clientKey: CLIENT_KEY, // Public key used for client-side authentication: https://docs.adyen.com/development-resources/client-side-authentication
      session: {
        id: sessionId, // Unique identifier for the payment session.
        sessionData, // The payment session data.
      },
      onPaymentCompleted: (result: any, component: any) => {
          console.info(result, component);
      },
      onError: (error:any, component:any): void => {
          console.error(error.name, error.message, error.stack, component);
      }
    };
    const initializeCheckout = async (config: object) => {
      const component = await AdyenCheckout(config);
      if (redirectResult) {
        console.log('redirectResult found', redirectResult);
        component.submitDetails({ details: { redirectResult } });
      };
  
      setCheckout(component);
    };

    initializeCheckout(configuration);
  }, [sessionId, sessionData, redirectResult]);

  console.log(checkout);
  return [checkout];
};