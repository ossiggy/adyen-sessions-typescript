type FormDataProps = {
  value: number,
  currency: string,
  countryCode: string,
  component: string
};

type PaymentsFormProps = {
  onSubmit: (formData: FormDataProps) => void;
};

export { FormDataProps, PaymentsFormProps };