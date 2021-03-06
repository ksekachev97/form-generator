import Ajv, { ValidateFunction, JSONSchemaType, ErrorObject } from 'ajv';

import { FormJson } from '../models';
import { FormFieldType } from '../models/fields';
import { controlsSchema } from './schemas/ControlsSchema';
import { fieldSchema } from './schemas/FormFieldSchema';

const ajv = new Ajv();

const schema: JSONSchemaType<FormJson> = {
  type: 'object',
  properties: {
    title: { type: 'string', nullable: true },
    items: {
      type: 'array',
      uniqueItems: true,
      items: fieldSchema,
      minItems: 1,
    },
    controls: {
      type: 'array',
      items: controlsSchema,
      minItems: 1,
    },
  },
  required: ['controls', 'items'],
};

export function validateDataForErrors(
  data: FormJson
): Array<string> | undefined {
  const validator: ValidateFunction = ajv.compile(schema);
  const isValid = validator(data);

  if (!isValid) {
    return validator.errors
      ?.filter((error: ErrorObject) => error.params.passingSchemas !== null) //ignore notpassing schema errors
      .map((error: ErrorObject) => {
        let errorString = `${error.instancePath} ${error.message}`;

        if (error.params.allowedValue) {
          errorString += ` "${error.params.allowedValue}"`;
        }

        if (error.params.allowedValues) {
          errorString += `: ${error.params.allowedValues
            .map((value: string) => `"${value}"`)
            .toString()}`;
        }
        return errorString;
      });
  }

  const duplicateName = findDuplicateNames(data.items);
  if (duplicateName) {
    return [`value "${duplicateName}" of field "name" is not unique!`];
  }

  return undefined;
}

const findDuplicateNames = (arr: Array<FormFieldType>): string | undefined => {
  const temp = [];
  for (let field in arr) {
    if (temp.indexOf(arr[field].name) < 0) {
      temp.push(arr[field].name);
    } else {
      return arr[field].name;
    }
  }
  return undefined;
};
