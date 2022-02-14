import { useSearchParams } from 'react-router-dom';
import { useCheckout } from '../../hooks';

export const Component = ({ type, sessionId, sessionData }: { type: string; sessionId: string; sessionData: string }) => {
    const [redirectInfo] = useSearchParams();
    const redirectResult = {
        redirectResult: redirectInfo.get('redirectResult'),
        redirectSessionId: redirectInfo.get('sessionId')
    };
    const [checkout] = useCheckout({ sessionId, sessionData, redirectResult });

    if (checkout) {
        checkout.create(type).mount('#checkout');
    }
    return <div id="checkout"></div>;
};
