import React, { ReactElement } from 'react';
import { Field, Form, FormRenderProps } from 'react-final-form';

import './Result.scss';

import { IResultProps } from './types';
import { FormButton } from '../../models';
import { FormField } from '../../models/fields';
import { cn } from '@bem-react/classname';

function Result({ formConfig }: IResultProps): ReactElement {
  const cnResult = cn('Result');

  const onFormSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const buildForm = (props: FormRenderProps) => {
    const cnGeneratedForm = cn('GeneratedForm');
    const { title, items, controls } = formConfig || {};

    return (
      <form
        className={cnGeneratedForm()}
        onSubmit={props.handleSubmit}
        name="generated-form"
      >
        <h1 className={cnGeneratedForm('Title')}>{title}</h1>
        {items?.map((field: FormField) => (
          <fieldset className={cnGeneratedForm('Fieldset')} key={field.name}>
            <label htmlFor={field.name} className={cnGeneratedForm('Label')}>
              {field.label}
            </label>
            <Field
              className={cnGeneratedForm('Field')}
              name={field.name}
              component={field.type === 'textarea' ? 'textarea' : 'input'}
              value={field.value}
            ></Field>
          </fieldset>
        ))}
        <div className={cnGeneratedForm('Controls')}>
          {controls?.map((control: FormButton) => (
            <input
              name={control.label}
              type={control.type}
              key={control.label}
              value={control.label}
              form="generated-form"
              className={cnGeneratedForm('Button')}
            ></input>
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
