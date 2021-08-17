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
    <div className={cnGeneratedForm('RadioField')}>
      {props.values.map((data: RadioFieldData) => (
        <label className={cnGeneratedForm('RadioFieldLabel')} key={data.value}>
          <Field
            className={cnGeneratedForm('RadioFieldDot')}
            name={props.name}
            component="input"
            type="radio"
            value={data.value}
            initialValue={props.value}
            readOnly={props.readonly}
            required={props.required}
          />
          {data.label}
        </label>
      ))}
    </div>
  );
}

export default React.memo(RadioField);
