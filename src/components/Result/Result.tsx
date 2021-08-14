import React, { ReactElement } from 'react';
import { IResultProps } from './types';

import './Result.scss';
import { FormJson } from '../../models';

function Result({ formConfig }: IResultProps): ReactElement {
  const buildFormFromJson = (config: FormJson) => {
    return <form></form>;
  };

  return (
    <div className="Result">
      {formConfig ? (
        buildFormFromJson(formConfig)
      ) : (
        <p className="Result__NoJsonText">No valid JSON was provided.</p>
      )}
    </div>
  );
}

export default Result;
