import { FormField } from './fields';

export interface FormJson {
  title?: string;
  items: Array<FormField>;
  controls: Array<FormButton>;
}

export type FormButton = {
  label: string;
  type: 'submit' | 'button' | 'reset';
};
