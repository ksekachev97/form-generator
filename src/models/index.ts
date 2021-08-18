import { FormFieldType } from './fields';

export interface FormJson {
  title?: string;
  items: Array<FormFieldType>;
  controls: Array<FormButtonType>;
}

export type FormButtonType = {
  label: string;
  type: 'submit' | 'button' | 'reset';
};
