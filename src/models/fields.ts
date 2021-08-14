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
}
export interface TextareaField extends BaseFormField {
  type: 'textarea';
  rows?: number;
  cols?: number;
}
export interface CheckboxField extends BaseFormField {
  type: 'checkbox';
}
export interface DateField extends BaseFormField {
  type: 'date';
}
export interface RadioField extends BaseFormField {
  type: 'radio';
}

export type FormField =
  | TextField
  | NumberField
  | TextareaField
  | CheckboxField
  | DateField
  | RadioField;
