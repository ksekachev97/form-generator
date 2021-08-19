// For testing purposes, should not be used in production

export const validJsonMock = JSON.stringify(
  {
    title: 'Form',
    items: [
      {
        label: 'Text Input',
        type: 'text',
        name: 'textinput1',
        value: 'value',
      },
      {
        label: 'Readonly',
        type: 'text',
        name: 'textinput2',
        value: 'value',
        readonly: true,
      },
      {
        label: 'Number Input',
        type: 'number',
        name: 'number1',
        value: 1,
      },
      {
        label: 'Required',
        type: 'number',
        name: 'number2',
        required: true,
      },
      {
        label: 'Checkbox',
        type: 'checkbox',
        name: 'checkbox',
        checked: false,
      },
      {
        label: 'Date',
        type: 'date',
        name: 'date',
        value: '2021-08-17',
      },
      {
        label: 'Radio',
        type: 'radio',
        name: 'radio1',
        value: '1',
        values: [
          {
            label: 'Value 1',
            value: '1',
          },
          {
            label: 'Value 2',
            value: '2',
          },
        ],
      },
      {
        label: 'Textarea',
        type: 'textarea',
        name: 'textarea',
        rows: 4,
        cols: 10,
      },
    ],
    controls: [
      {
        label: 'Ok',
        type: 'submit',
      },
      {
        label: 'Reset',
        type: 'reset',
      },
    ],
  },
  null,
  2
);
