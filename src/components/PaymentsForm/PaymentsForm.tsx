import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PaymentsFormProps } from "../../types";

const PaymentsForm = ({ onSubmit }: PaymentsFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="value">Amount Value</Label>
        <Input type="number" name="value" value="25" onChange={handleChange}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="currency">Currency</Label>
        <Input type="select" name="currency" onChange={handleChange}>
          <option value="EUR" selected>EUR</option>
          <option value="USD">USD</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="countryCode">Country Code</Label>
        <Input name="countryCode" placeholder="NL" onChange={handleChange}></Input>
      </FormGroup>
      <div style={{"marginTop": "10px", "textAlign": "right"}}>
        <Button type="submit" color="primary" >Submit</Button>
      </div>
    </Form>
  )
};

export default PaymentsForm;