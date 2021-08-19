import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';
import { TextFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './TextField.scss';

function TextField(props: TextFieldType): ReactElement {
  return (
    <Field
      id={props.name}
      name={props.name}
      component="input"
      initialValue={props.value}
      type={props.type}
      readOnly={props.readonly}
      required={props.required}
      placeholder={props.placeholder}
      className={cnGeneratedForm('TextField')}
    />
  );
}

export default React.memo(TextField);
