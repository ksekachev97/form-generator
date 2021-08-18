import { JSONSchemaType } from 'ajv';
import { FormFieldType } from '../../models/fields';
import {
  CheckboxFieldSchema,
  DateFieldSchema,
  NumberFieldSchema,
  RadioFieldSchema,
  TextareaFieldSchema,
  TextFieldSchema,
} from './fields';

export const fieldSchema: JSONSchemaType<FormFieldType> = {
  type: 'object',
  oneOf: [
    CheckboxFieldSchema,
    DateFieldSchema,
    NumberFieldSchema,
    RadioFieldSchema,
    TextareaFieldSchema,
    TextFieldSchema,
  ],
  required: [],
};
