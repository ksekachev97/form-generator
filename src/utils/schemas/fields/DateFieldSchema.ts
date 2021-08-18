import { JSONSchemaType } from 'ajv';
import { DateFieldType } from '../../../models/fields';
import { baseFieldSchema } from './BaseFieldSchema';

export const DateFieldSchema: JSONSchemaType<DateFieldType> = {
  type: 'object',
  properties: {
    ...baseFieldSchema.properties,
    type: { const: 'date' },
    value: { type: 'string', nullable: true }, // probably should be validated by RegExp?
    min: { type: 'string', nullable: true },
    max: { type: 'string', nullable: true },
    step: { type: 'number', nullable: true },
  },
  required: [...baseFieldSchema.required],
};
