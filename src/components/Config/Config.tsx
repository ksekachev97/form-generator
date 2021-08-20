import React, { ReactElement } from 'react';
import { cn } from '@bem-react/classname';
import { useHistory } from 'react-router';

import './Config.scss';

import { IConfigProps } from './types';
import useJsonInput from '../../hooks/useJsonInput';
import { AppLinks } from '../../constants/urls';
import { validJsonMock } from './mock';

function Config({ handleConfig, initialValue }: IConfigProps): ReactElement {
  const cnConfig = cn('Config');
  const history = useHistory();

  const onSuccess = () => {
    history.push(AppLinks.Result);
  };

  const [
    value,
    handleChange,
    handlePrettify,
    handleSubmit,
    error,
  ] = useJsonInput(
    handleConfig,
    JSON.stringify(initialValue, null, 2),
    onSuccess
  );

  const handleAddValidJson = () => {
    handleChange({
      target: { value: validJsonMock },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  };

  return (
    <form onSubmit={handleSubmit} className={cnConfig()}>
      <textarea
        name="config"
        value={value}
        onChange={handleChange}
        className={cnConfig('Textarea')}
        rows={20}
        data-testid="config-input"
      />
      <p
        className={cnConfig('Status', { error: Boolean(error) })}
        data-testid="error"
      >
        {error}
      </p>
      <button onClick={handlePrettify} type="button">
        Prettify
      </button>

      <button
        onClick={handleAddValidJson}
        type="button"
        style={{ marginLeft: '1rem' }}
        title="only because this is the test task"
      >
        Set valid JSON
      </button>

      <div className={cnConfig('Controls')}>
        <button
          type="submit"
          className={cnConfig('Button')}
          disabled={Boolean(error)}
          data-testid="submit-button"
        >
          Apply
        </button>
      </div>
    </form>
  );
}

export default Config;
