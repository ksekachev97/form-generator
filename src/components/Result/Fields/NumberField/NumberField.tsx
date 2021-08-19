import React, { ReactElement } from 'react';
import { Field } from 'react-final-form';
import { NumberFieldType } from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './NumberField.scss';

function NumberField(props: NumberFieldType): ReactElement {
  return (
    <Field
      id={props.name}
      name={props.name}
      component="input"
      initialValue={props.value}
      type="number"
      readOnly={props.readonly}
      required={props.required}
      className={cnGeneratedForm('NumberField')}
      step={props.step}
      min={props.min}
      max={props.max}
    />
  );
}

export default React.memo(NumberField);
