import React, { ReactElement } from 'react';
import { IConfigProps } from './types';

import './Config.scss';

function Config({ handleJson }: IConfigProps): ReactElement {
  const [json, setJson] = React.useState<string>('{}');
  const [error, setError] = React.useState<string | null>();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handlePrettify = () => {
    try {
      setJson(JSON.stringify(JSON.parse(json), null, 4));
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Config">
      <textarea
        name="config"
        value={json}
        onChange={handleChange}
        className="Config__Textarea"
      />
      <span className="Config__Error">{error}</span>
      <button onClick={handlePrettify}>Prettify</button>
      <div className="Config__Controls">
        <button type="submit" className="Config__Button" disabled={!error}>
          Apply
        </button>
      </div>
    </form>
  );
}

export default Config;
