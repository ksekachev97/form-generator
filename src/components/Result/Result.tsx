import React, { ReactElement } from 'react';
import { IResultProps } from './types';

import './Result.scss';

function Result({}: IResultProps): ReactElement {
  return (
    <div className="Result">
      <h1>i am result</h1>
    </div>
  );
}

export default Result;
