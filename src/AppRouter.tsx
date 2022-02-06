import { Route, Routes } from "react-router-dom";
import { FormDataProps, PaymentsFormProps } from "./types"
import { Dropin, PaymentsForm, ComponentBase} from "./components";

const ApplicationRouter = ({ onSubmit, onChange, options }: PaymentsFormProps ) => {
  const { value, currency, countryCode, component } = options;
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PaymentsForm 
            onSubmit={onSubmit}
            onChange={onChange}
          />
        }
      >
        <Route 
          path="drop-in" 
          element={
            <Dropin 
              value={value} 
              currency={currency} 
              countryCode={countryCode} 
              component={component}
            />
          }
        />
        <Route 
          path=":component" 
          element={
            <ComponentBase 
              value={value} 
              currency={currency} 
              countryCode={countryCode} 
              component={component}
            />
          }
        />
      </Route>
    </Routes>
  )
};

export default ApplicationRouter;