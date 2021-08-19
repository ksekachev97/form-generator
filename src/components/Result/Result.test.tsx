import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import { FormJson } from '../../models';
import Result from './Result';

describe('Result component', () => {
  describe('should render', () => {
    it('with error when no config provided', () => {
      render(<Result />);

      const error = screen.getByTestId('error');

      expect(error).toBeInTheDocument();
      expect(error.textContent).toBe('No valid JSON was provided.');
    });

    it('correctly with the correct config with title', () => {
      const config: FormJson = {
        title: 'Title',
        items: [
          {
            label: 'item',
            type: 'text',
            name: 'text',
          },
        ],
        controls: [
          {
            label: 'Ok',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByLabelText('item')).toBeInTheDocument();
      expect(screen.getByText('Ok')).toBeInTheDocument();
    });

    it('correctly with the correct config with no title', () => {
      const config: FormJson = {
        items: [
          {
            label: 'item',
            type: 'text',
            name: 'text',
          },
        ],
        controls: [
          {
            label: 'Ok',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      expect(screen.getByLabelText('item')).toBeInTheDocument();
      expect(screen.getByText('Ok')).toBeInTheDocument();
    });
  });

  describe('on submit button click', () => {
    let alertSpy: jest.SpyInstance;

    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert').mockImplementationOnce(() => {});
    });

    it('should submit correct values with correct config <Text>', () => {
      const config: FormJson = {
        items: [
          {
            label: 'Text',
            name: 'text',
            type: 'text',
            value: 'value',
          },
        ],
        controls: [
          {
            label: 'Submit',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      const submitBtn = screen.getByText('Submit');

      fireEvent.click(submitBtn);

      expect(alertSpy).toBeCalledWith(
        JSON.stringify({ text: 'value' }, null, 2)
      );
    });
    it('should submit correct values with correct config <Checkbox>', () => {
      const config: FormJson = {
        items: [
          {
            label: 'Checkbox',
            name: 'checkbox',
            type: 'checkbox',
            checked: true,
          },
        ],
        controls: [
          {
            label: 'Submit',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      const submitBtn = screen.getByText('Submit');

      fireEvent.click(submitBtn);

      expect(alertSpy).toBeCalledWith(
        JSON.stringify({ checkbox: true }, null, 2)
      );
    });
    it('should submit correct values with correct config <Date>', () => {
      const config: FormJson = {
        items: [
          {
            label: 'Date',
            name: 'date',
            type: 'date',
            value: '2001-12-01',
          },
        ],
        controls: [
          {
            label: 'Submit',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      const submitBtn = screen.getByText('Submit');

      fireEvent.click(submitBtn);

      expect(alertSpy).toBeCalledWith(
        JSON.stringify({ date: '2001-12-01' }, null, 2)
      );
    });
    it('should submit correct values with correct config <Number>', () => {
      const config: FormJson = {
        items: [
          {
            label: 'Number',
            name: 'number',
            type: 'number',
            value: '10',
          },
        ],
        controls: [
          {
            label: 'Submit',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      const submitBtn = screen.getByText('Submit');

      fireEvent.click(submitBtn);

      expect(alertSpy).toBeCalledWith(
        JSON.stringify({ number: '10' }, null, 2)
      );
    });
    it('should submit correct values with correct config <Radio>', () => {
      const config: FormJson = {
        items: [
          {
            label: 'Radio',
            name: 'radio',
            type: 'radio',
            value: '1',
            values: [
              {
                label: '1',
                value: '1',
              },
              {
                label: '2',
                value: '2',
              },
            ],
          },
        ],
        controls: [
          {
            label: 'Submit',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      const submitBtn = screen.getByText('Submit');

      fireEvent.click(submitBtn);

      expect(alertSpy).toBeCalledWith(JSON.stringify({ radio: '1' }, null, 2));
    });
    it('should submit correct values with correct config <Textarea>', () => {
      const config: FormJson = {
        items: [
          {
            label: 'Textarea',
            name: 'textarea',
            type: 'textarea',
            value: 'textarea',
          },
        ],
        controls: [
          {
            label: 'Submit',
            type: 'submit',
          },
        ],
      };
      render(<Result formConfig={config} />);

      const submitBtn = screen.getByText('Submit');

      fireEvent.click(submitBtn);

      expect(alertSpy).toBeCalledWith(
        JSON.stringify({ textarea: 'textarea' }, null, 2)
      );
    });
  });

  describe('on reset button click', () => {
    it('should restore initial values', () => {
      const config: FormJson = {
        title: 'Title',
        items: [
          {
            label: 'test',
            name: 'test',
            type: 'text',
            value: 'foo',
          },
        ],
        controls: [
          {
            label: 'Reset',
            type: 'reset',
          },
        ],
      };

      render(<Result formConfig={config} />);

      const resetBtn = screen.getByText('Reset');
      const input = screen.getByLabelText('test') as HTMLInputElement;

      fireEvent.change(input, { target: { value: 'bar' } });

      expect(input.value).toBe('bar');

      fireEvent.click(resetBtn);

      expect(input.value).toBe('foo');
    });
  });
});
