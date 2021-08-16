export interface BaseFormField {
  label: string;
  name: string;
  value?: string;
  readonly?: boolean;
  required?: boolean;
}

export interface TextField extends BaseFormField {
  type: 'text';
}

export interface NumberField extends BaseFormField {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
}

export interface DateField extends BaseFormField {
  type: 'date';
}

export interface TextareaField extends BaseFormField {
  type: 'textarea';
  rows?: number;
  cols?: number;
}

export interface CheckboxField extends BaseFormField {
  type: 'checkbox';
}

export interface RadioField extends BaseFormField {
  type: 'radio';
  values: Array<RadioFieldData>;
}

export type RadioFieldData = {
  label: string;
  value: string;
};

export type InputFormField = TextField | NumberField | DateField;

export type FormField =
  | InputFormField
  | TextareaField
  | CheckboxField
  | RadioField;
