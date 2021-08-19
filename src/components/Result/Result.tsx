import React, { ReactElement } from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { cn } from '@bem-react/classname';

import './Result.scss';

import { IResultProps } from './types';
import { cnGeneratedForm } from './constants';
import { FormButtonType } from '../../models';
import { FormFieldType } from '../../models/fields';
import {
  RadioField,
  CheckboxField,
  TextareaField,
  NumberField,
  DateField,
  TextField,
} from './Fields';

function Result({ formConfig }: IResultProps): ReactElement {
  const cnResult = cn('Result');
  const { title, items, controls } = formConfig || {};

  const onFormSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderFieldForType = (field: FormFieldType) => {
    switch (field.type) {
      case 'radio':
        return <RadioField {...field} />;
      case 'checkbox':
        return <CheckboxField {...field} />;
      case 'textarea':
        return <TextareaField {...field} />;
      case 'number':
        return <NumberField {...field} />;
      case 'date':
        return <DateField {...field} />;
      default:
        return <TextField {...field} />;
    }
  };

  const buildForm = (props: FormRenderProps) => {
    const onFormReset = () => props.form.restart(props.initialValues);

    return (
      <form
        className={cnGeneratedForm()}
        onSubmit={props.handleSubmit}
        onReset={onFormReset}
      >
        <h1 className={cnGeneratedForm('Title')}>{title}</h1>
        {items?.map((field: FormFieldType) => (
          <fieldset className={cnGeneratedForm('Fieldset')} key={field.name}>
            <label htmlFor={field.name} className={cnGeneratedForm('Label')}>
              {field.label}
            </label>
            {renderFieldForType(field)}
          </fieldset>
        ))}
        <div className={cnGeneratedForm('Controls')}>
          {controls?.map((control: FormButtonType) => (
            <button
              name={control.label}
              type={control.type}
              key={control.label}
              className={cnGeneratedForm('Button')}
            >
              {control.label}
            </button>
          ))}
        </div>
      </form>
    );
  };

  return (
    <div className={cnResult()}>
      {formConfig ? (
        <Form onSubmit={onFormSubmit} render={buildForm} />
      ) : (
        <p className={cnResult('Error')} data-testid="error">
          No valid JSON was provided.
        </p>
      )}
    </div>
  );
}

export default React.memo(Result);
