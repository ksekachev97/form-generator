import React, { ChangeEvent, MouseEvent } from 'react';
import { FormJson } from '../models';
import { parseJson } from '../utils/parseJson';
import { validateDataForErrors } from '../utils/validateConfig';

function useJsonInput(
  configHandler: (config: FormJson) => void,
  initialValue?: string,
  onSuccess?: () => void
): [
  string,
  (event: ChangeEvent<HTMLTextAreaElement>) => void,
  (event: MouseEvent) => void,
  (e: React.FormEvent<HTMLFormElement>) => void,
  string | null
] {
  const [value, setValue] = React.useState<string>(initialValue || '');
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setError(null);
  };

  const handlePrettify = () => {
    handleError(() => {
      setValue(JSON.stringify(parseJson(value), null, 2));
      setError(null);
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleError(() => {
      const config: FormJson = parseJson(value);
      const errors = validate(config);
      if (!errors) {
        configHandler(config);
        onSuccess && onSuccess();
      } else {
        setError(errors);
      }
    });
  };

  const handleError = (func: () => void) => {
    try {
      func();
    } catch (error) {
      setError(error.message);
    }
  };

  const validate = (config: FormJson) => {
    const errors: string[] | undefined = validateDataForErrors(config);

    if (!errors) {
      return false;
    } else {
      const errorString = errors.join(' OR ');
      return `Validation error: ${errorString}`;
    }
  };

  return [value, handleChange, handlePrettify, handleSubmit, error];
}

export default useJsonInput;
