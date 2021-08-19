import { JSONSchemaType } from 'ajv';
import { FormButtonType } from '../../models';

export const controlsSchema: JSONSchemaType<FormButtonType> = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    type: { enum: ['submit', 'reset'], type: 'string' },
  },
  required: ['label', 'type'],
};
