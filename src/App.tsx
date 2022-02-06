import React, { useState } from "react";
import ApplicationRouter from "./AppRouter";

const Application = () => {
  const [options, setOptions] = useState({
    value: 25,
    currency: "EUR",
    countryCode: "NL",
    component: "drop-in"
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: submitHandler
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="app">
      <ApplicationRouter 
        onSubmit={handleSubmit}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default Application;