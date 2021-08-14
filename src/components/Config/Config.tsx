import React, { ReactElement } from 'react';
import { IConfigProps } from './types';

import './Config.scss';

function Config({}: IConfigProps): ReactElement {
  return (
    <div className="Config">
      <h1>I am config</h1>
    </div>
  );
}

export default Config;
