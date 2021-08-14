import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AppLinks } from '../../urls';

import './Navigation.scss';

interface Props {}

function Navigation({}: Props): ReactElement {
  return (
    <div className="Navigation">
      <Link className="Navigation__Tab" to={AppLinks.Config}>
        Config
      </Link>
      <Link className="Navigation__Tab" to={AppLinks.Result}>
        Result
      </Link>
    </div>
  );
}

export default Navigation;
