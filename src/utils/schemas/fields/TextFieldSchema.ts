import { JSONSchemaType } from 'ajv';
import { TextFieldType } from '../../../models/fields';
import { baseFieldSchema } from './BaseFieldSchema';

export const TextFieldSchema: JSONSchemaType<TextFieldType> = {
  type: 'object',
  properties: {
    ...baseFieldSchema.properties,
    type: { const: 'text' },
    placeholder: { type: 'string', nullable: true },
  },
  required: [...baseFieldSchema.required],
};
