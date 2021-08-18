import { JSONSchemaType } from 'ajv';
import { TextareaFieldType } from '../../../models/fields';
import { baseFieldSchema } from './BaseFieldSchema';

export const TextareaFieldSchema: JSONSchemaType<TextareaFieldType> = {
  type: 'object',
  properties: {
    ...baseFieldSchema.properties,
    type: { const: 'textarea' },
    rows: { type: 'integer', nullable: true },
    cols: { type: 'integer', nullable: true },
  },
  required: [...baseFieldSchema.required],
};
