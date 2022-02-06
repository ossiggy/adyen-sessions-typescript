import { Route, Routes } from 'react-router-dom';
import { FormDataProps, PaymentsFormProps } from './types'
import { Dropin, PaymentsForm, ComponentBase} from './components';

const ApplicationRouter = ({ onSubmit }: PaymentsFormProps, { value, currency, countryCode, component }: FormDataProps ) => {
  <Routes>
    <Route 
      path="/" 
      element={
        <PaymentsForm 
          onSubmit={onSubmit}
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
};

export default ApplicationRouter;