import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';

import { TextareaFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './TextareaField.scss';

function TextareaField(props: TextareaFieldType): ReactElement {
  return (
    <Field
      id={props.name}
      name={props.name}
      component="textarea"
      initialValue={props.value}
      readOnly={props.readonly}
      required={props.required}
      cols={props.cols}
      rows={props.rows}
      placeholder={props.placeholder}
      className={cnGeneratedForm('TextareaField')}
    />
  );
}

export default React.memo(TextareaField);
