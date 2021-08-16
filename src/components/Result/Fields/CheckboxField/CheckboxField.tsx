import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';

import { CheckboxField as CheckboxFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './CheckboxField.scss';

function CheckboxField(props: CheckboxFieldType): ReactElement {
  return (
    <Field
      name={props.name}
      component="input"
      defaultValue={props.value}
      type="checkbox"
      readOnly={props.readonly}
      required={props.required}
      className={cnGeneratedForm('CheckboxField')}
    />
  );
}

export default CheckboxField;
