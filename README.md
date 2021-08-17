Form generator, that builds form from JSON in special pattern.

App containnts two tabs:

Config – contains textfield that accept JSON;
Result – shows result of generated form.

There is no limits for the count of fields.

Allowed types of fields:
- Number (numberfield)
- String (textfield)
- Multilined text (textarea)
- Logical type (checkbox)
- Date (dateflied)
- Enum (radio buttons)

Also, app allow you to set up Title, count and text of the Buttons, e.g. (Ok, Cancel, Submit)

## Example JSON
```JSON
{
  "title": "Form",
  "items": [
    {
      "label": "Text Input",
      "type": "text",
      "name": "textinput",
      "value": "value"
    },
    {
      "label": "Number Input",
      "type": "number",
      "name": "number",
      "value": 1
    },
    {
      "label": "Checkbox",
      "type": "checkbox",
      "name": "checkbox"
    },
    {
      "label": "Date",
      "type": "date",
      "name": "date",
      "value": "2021-08-17"
    },
    {
      "label": "Radio",
      "type": "radio",
      "name": "radio1",
      "value": "1",
      "values": [
        { "label": "Value 1", "value": "1" },
        { "label": "Value 2", "value": "2" }
      ]
    },
    {
      "label": "Textarea",
      "type": "textarea",
      "name": "textarea",
      "rows": 4,
      "cols": 10
    }
  ],
  "controls": [
    {
      "label": "Ok",
      "type": "submit"
    },
    {
      "label": "Reset",
      "type": "reset"
    }
  ]
}

```