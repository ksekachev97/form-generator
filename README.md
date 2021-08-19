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
// fields "type", "name" and "label" are required for all types of items
{
   "title":"Form",
   "items":[
      {
         "label":"Text Input",
         "type":"text",
         "name":"textinput1",
         "value":"value"
      },
      {
         "label":"Readonly",
         "type":"text",
         "name":"textinput2",
         "value":"value",
         "readonly":true
      },
      {
         "label":"Number Input",
         "type":"number",
         "name":"number1",
         "value":1
      },
      {
         "label":"Required",
         "type":"number",
         "name":"number2",
         "required":true
      },
      {
         "label":"Checkbox",
         "type":"checkbox",
         "name":"checkbox",
         "checked": false
      },
      {
         "label":"Date",
         "type":"date",
         "name":"date",
         "value":"2021-08-17"
      },
      {
         "label":"Radio",
         "type":"radio",
         "name":"radio1",
         "value":"1",
         "values":[
            {
               "label":"Value 1",
               "value":"1"
            },
            {
               "label":"Value 2",
               "value":"2"
            }
         ]
      },
      {
         "label":"Textarea",
         "type":"textarea",
         "name":"textarea",
         "rows":4,
         "cols":10
      }
   ],
   "controls":[
      {
         "label":"Ok",
         "type":"submit"
      },
      {
         "label":"Reset",
         "type":"reset"
      }
   ]
}

```
