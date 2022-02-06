import { useState } from 'react';
import { FormDataProps } from './types';

const Application = () => {
  const [options, setOptions] = useState(null);
  
  const handleSubmit = (formData: FormDataProps) => {
    if(!options) {
      setOptions(formData);
    } else {
      setOptions(prevState => ({
        ...prevState,
        ...formData
      }));
    };
  };

  return (
    <div id="app">
      
    </div>
  );
};

export default Application;