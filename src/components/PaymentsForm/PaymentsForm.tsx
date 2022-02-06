import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PaymentsFormProps } from "../../types";

const PaymentsForm = ({ options: { value, currency, countryCode, component }, onSubmit, onChange }: PaymentsFormProps) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="value">Amount Value</Label>
        <Input type="number" name="value" value={value} onChange={handleChange}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="currency">Currency</Label>
        <Input type="select" name="currency" onChange={handleChange} selected={currency}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="countryCode">Country Code</Label>
        <Input name="countryCode" value={countryCode} onChange={handleChange}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="currency">Type</Label>
        <Input type="select" name="component" onChange={handleChange} selected={component}>
          {/* TODO: Base these options off of checkout.paymentMethodsResponse (will need to run session init on change of country/currency) */}
          <option value="dropin">Drop-in</option>
          <option value="card">Credit Cards</option>
          <option value="paypal">Pay Pal</option>
        </Input>
      </FormGroup>
      <div style={{"marginTop": "10px", "textAlign": "right"}}>
        <Button type="submit" color="primary" >Submit</Button>
      </div>
    </Form>
  )
};

export default PaymentsForm;