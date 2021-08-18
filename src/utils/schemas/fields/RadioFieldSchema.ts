import { JSONSchemaType } from 'ajv';
import { RadioFieldType } from '../../../models/fields';
import { baseFieldSchema } from './BaseFieldSchema';

export const RadioFieldSchema: JSONSchemaType<RadioFieldType> = {
  // TextField
  type: 'object',
  properties: {
    ...baseFieldSchema.properties,
    type: { const: 'radio' },
    values: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: { type: 'string' },
          value: { type: 'string' },
        },
        required: ['label', 'value'],
      },
    },
  },
  required: [...baseFieldSchema.required, 'values'],
};
