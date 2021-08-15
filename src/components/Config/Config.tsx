import React, { ReactElement } from 'react';
import { cn } from '@bem-react/classname';
import { IConfigProps } from './types';

import './Config.scss';

import useJsonInput from '../../hooks/useJsonInput';
import { useHistory } from 'react-router';
import { AppLinks } from '../../urls';

function Config({ handleConfig, initialValue }: IConfigProps): ReactElement {
  const cnConfig = cn('Config');
  const history = useHistory();

  const onSuccess = () => {
    history.push(AppLinks.Result);
  };

  const [value, handleChange, handlePrettify, handleSubmit, error] =
    useJsonInput(handleConfig, JSON.stringify(initialValue), onSuccess);

  return (
    <form onSubmit={handleSubmit} className={cnConfig()}>
      <textarea
        name="config"
        value={value}
        onChange={handleChange}
        className={cnConfig('Textarea')}
      />
      <p className={cnConfig('Status', { error: Boolean(error) })}>{error}</p>
      <button onClick={handlePrettify} type="button">
        Prettify
      </button>
      <div className={cnConfig('Controls')}>
        <button
          type="submit"
          className={cnConfig('Button')}
          disabled={Boolean(error)}
        >
          Apply
        </button>
      </div>
    </form>
  );
}

export default Config;
