import { FormJson } from '../../models';

export interface IConfigProps {
  handleConfig: (json: FormJson) => void;
  initialValue?: FormJson;
}
