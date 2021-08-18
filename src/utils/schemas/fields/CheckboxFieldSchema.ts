import { JSONSchemaType } from 'ajv';
import { DateFieldType } from '../../../models/fields';
import { baseFieldSchema } from './BaseFieldSchema';

export const CheckboxFieldSchema: JSONSchemaType<DateFieldType> = {
  type: 'object',
  properties: {
    ...baseFieldSchema.properties,
    type: { const: 'checkbox' },
    checked: { type: 'boolean', nullable: true },
  },
  required: [...baseFieldSchema.required],
};
