import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';

import { CheckboxFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './CheckboxField.scss';

function CheckboxField(props: CheckboxFieldType): ReactElement {
  return (
    <Field
      id={props.name}
      name={props.name}
      component="input"
      initialValue={props.value}
      type="checkbox"
      readOnly={props.readonly}
      required={props.required}
      className={cnGeneratedForm('CheckboxField')}
      checked={props.checked}
    />
  );
}

export default React.memo(CheckboxField);
