import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';

import { TextareaField as TextareaFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './TextareaField.scss';

function TextareaField(props: TextareaFieldType): ReactElement {
  return (
    <Field
      name={props.name}
      component="textarea"
      defaultValue={props.value}
      readOnly={props.readonly}
      required={props.required}
      cols={props.cols}
      rows={props.rows}
      className={cnGeneratedForm('TextareaField')}
    />
  );
}

export default TextareaField;
