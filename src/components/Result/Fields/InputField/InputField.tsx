import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';
import { InputFormField } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './InputField.scss';

function InputField(props: InputFormField): ReactElement {
  return (
    <Field
      name={props.name}
      component="input"
      defaultValue={props.value}
      type={props.type}
      readOnly={props.readonly}
      required={props.required}
      className={cnGeneratedForm('InputField')}
    />
  );
}

export default InputField;
