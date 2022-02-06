import { useParams } from "react-router-dom";
import { useStartSession } from "../../hooks";
import { FormDataProps } from "../../types";
import Component from "./Component";

const ComponentBase = ({ value, currency, countryCode }: FormDataProps) => {
  const params = useParams();
  const component = params.component;
  const [ sessionInfo ] = useStartSession({ value, currency, countryCode });
  if (sessionInfo && component){
    console.log(sessionInfo);
    return <Component type={component} sessionId={sessionInfo.id} sessionData={sessionInfo.sessionData}/>;
  }
  return <div>Something is wrong here...</div>
};

export default ComponentBase;