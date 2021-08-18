import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';
import { TextFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './TextField.scss';

function TextField(props: TextFieldType): ReactElement {
  return (
    <Field
      name={props.name}
      component="input"
      initialValue={props.value}
      type={props.type}
      readOnly={props.readonly}
      required={props.required}
      className={cnGeneratedForm('TextField')}
    />
  );
}

export default React.memo(TextField);
