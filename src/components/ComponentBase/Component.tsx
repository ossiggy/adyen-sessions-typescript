import { useCheckout } from "../../hooks";

const Component = ({type, sessionId, sessionData}: {type:string, sessionId: string, sessionData: string}) => {
  const [checkout] = useCheckout(sessionId, sessionData);

  if(checkout) {
    checkout.create(type).mount("#checkout");
  }
  return <div id="checkout"></div>;
};

export default Component;