import * as React from 'react';

type FormInput = {
  label?: any;
  id?: any;
  type: any;
  value?: any;
  handler?: any;
  hint?: any;
  validator?: any;
  mode?: any;
  color?: any;
  triggerOnEnter?: any;
  loading?: any;
  float?: any;
  width?: any;
  pattern?: any;
  maxLength?: any;
  align?: any;
  options?: any;
  showCancelButton?: any;
};

type FormProps = {
  inputs: FormInput[];
  onChange: any;
  color?: any;
  links?: any;
  title?: any;
  error?: any;
  logo?: any;
  hint?: any;
};

declare class Form extends React.Component<FormProps> {}

export default Form;
