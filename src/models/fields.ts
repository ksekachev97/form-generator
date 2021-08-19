export interface BaseFormFieldType {
  label: string;
  name: string;
  type: string;
  value?: string;
  readonly?: boolean;
  required?: boolean;
}

export interface TextFieldType extends BaseFormFieldType {
  type: 'text';
  placeholder?: string;
}

export interface NumberFieldType extends BaseFormFieldType {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
}

export interface DateFieldType extends BaseFormFieldType {
  type: 'date';
  min?: string;
  max?: string;
  step?: number;
}

export interface TextareaFieldType extends BaseFormFieldType {
  type: 'textarea';
  placeholder: string;
  rows?: number;
  cols?: number;
}

export interface CheckboxFieldType extends BaseFormFieldType {
  type: 'checkbox';
  checked?: boolean;
}

export interface RadioFieldType extends BaseFormFieldType {
  type: 'radio';
  values: Array<RadioFieldDataType>;
}

export type RadioFieldDataType = {
  label: string;
  value: string;
};

export type FormFieldType =
  | TextFieldType
  | NumberFieldType
  | DateFieldType
  | TextareaFieldType
  | CheckboxFieldType
  | RadioFieldType;
