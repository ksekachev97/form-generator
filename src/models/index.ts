import React from 'react';

export interface FormJson {
  title?: string;
  items: Array<Field>;
  controls: Array<FormButton>;
}

export type Field = {
  type: 'number' | 'text' | 'textarea' | 'checkbox' | 'date' | 'radio';
};

export type FormButton = {
  label: string;
  type: 'submit' | 'button' | 'reset';
  handler?: (e: React.SyntheticEvent<any>) => void;
};
