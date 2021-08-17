import { FormJson } from '../models';

export function parseJson(json: string): FormJson {
  const obj: FormJson = JSON.parse(json);

  if (typeof obj !== 'object') {
    throw new Error('Inputted text is not a valid config');
  }

  return obj;
}
