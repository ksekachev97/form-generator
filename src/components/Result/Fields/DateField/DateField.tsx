import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';
import { DateFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './DateField.scss';

function DateField(props: DateFieldType): ReactElement {
  return (
    <Field
      name={props.name}
      component="input"
      initialValue={props.value}
      type="date"
      readOnly={props.readonly}
      required={props.required}
      className={cnGeneratedForm('DateField')}
      step={props.step}
      min={props.min}
      max={props.max}
    />
  );
}

export default React.memo(DateField);
