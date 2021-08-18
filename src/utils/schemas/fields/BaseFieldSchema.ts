import { JSONSchemaType } from 'ajv';
import { BaseFormFieldType } from '../../../models/fields';

export const baseFieldSchema: JSONSchemaType<BaseFormFieldType> = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    name: { type: 'string' },
    type: { type: 'string' },
    value: { type: 'string', nullable: true },
    readonly: { type: 'boolean', nullable: true },
    required: { type: 'boolean', nullable: true },
  },
  required: ['type', 'label', 'name'],
};
