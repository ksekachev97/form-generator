import React, { ReactElement } from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { cn } from '@bem-react/classname';

import './Result.scss';

import { IResultProps } from './types';
import { cnGeneratedForm } from './constants';
import RadioField from './Fields/RadioField/RadioField';
import { FormButton } from '../../models';
import { FormField } from '../../models/fields';
import InputField from './Fields/InputField/InputField';
import NumberField from './Fields/NumberField/NumberField';
import TextareaField from './Fields/TextAreaField/TextareaField';
import CheckboxField from './Fields/CheckboxField/CheckboxField';

function Result({ formConfig }: IResultProps): ReactElement {
  const cnResult = cn('Result');
  const { title, items, controls } = formConfig || {};

  const onFormSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderFieldForType = (field: FormField) => {
    switch (field.type) {
      case 'radio':
        return <RadioField {...field} />;
      case 'checkbox':
        return <CheckboxField {...field} />;
      case 'textarea':
        return <TextareaField {...field} />;
      case 'number':
        return <NumberField {...field} />;
      default:
        return <InputField {...field} />;
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
        {items?.map((field: FormField) => (
          <fieldset className={cnGeneratedForm('Fieldset')} key={field.name}>
            <label htmlFor={field.name} className={cnGeneratedForm('Label')}>
              {field.label}
            </label>
            {renderFieldForType(field)}
          </fieldset>
        ))}
        <div className={cnGeneratedForm('Controls')}>
          {controls?.map((control: FormButton) => (
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
        <p className={cnResult('Error')}>No valid JSON was provided.</p>
      )}
    </div>
  );
}

export default React.memo(Result);
