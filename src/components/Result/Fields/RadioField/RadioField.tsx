import React from 'react';
import { Field } from 'react-final-form';
import {
  RadioField as RadioFieldType,
  RadioFieldData,
} from '../../../../models/fields';
import { cnGeneratedForm } from '../../constants';

import './RadioField.scss';

function RadioField(props: RadioFieldType) {
  return (
    <>
      {props.values.map((data: RadioFieldData) => (
        <label className={cnGeneratedForm('RadioFieldLabel')}>
          <Field
            name={props.name}
            component="input"
            type="radio"
            value={data.value}
            defaultValue={props.value}
            className={cnGeneratedForm('RadioField')}
            readOnly={props.readonly}
            required={props.required}
          />
          {data.label}
        </label>
      ))}
    </>
  );
}

export default React.memo(RadioField);
