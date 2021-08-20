import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { AppLinks } from '../../constants/urls';

import './Navigation.scss';

function Navigation(): ReactElement {
  return (
    <div className="Navigation">
      <NavLink
        className="Navigation__Tab"
        activeClassName="Navigation__Tab_active"
        to={AppLinks.Config}
      >
        Config
      </NavLink>
      <NavLink
        className="Navigation__Tab"
        activeClassName="Navigation__Tab_active"
        to={AppLinks.Result}
      >
        Result
      </NavLink>
    </div>
  );
}

export default React.memo(Navigation);
