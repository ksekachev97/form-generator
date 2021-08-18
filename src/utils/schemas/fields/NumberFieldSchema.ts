import { JSONSchemaType } from 'ajv';
import { NumberFieldType } from '../../../models/fields';
import { baseFieldSchema } from './BaseFieldSchema';

export const NumberFieldSchema: JSONSchemaType<NumberFieldType> = {
  type: 'object',
  properties: {
    ...baseFieldSchema.properties,
    type: { const: 'number' },
    value: { type: 'number' },
    min: { type: 'number' },
    max: { type: 'number' },
    step: { type: 'number' },
  },
  required: [...baseFieldSchema.required],
};
