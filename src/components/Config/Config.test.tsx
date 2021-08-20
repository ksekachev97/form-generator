import React from 'react';

import {
  render,
  fireEvent,
  screen,
  RenderResult,
} from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory, MemoryHistory } from 'history';

import Config from './Config';
import { FormJson } from '../../models';
import { AppLinks } from '../../constants/urls';

const insertText = (textElement: HTMLElement, value: string) => {
  fireEvent.change(textElement, { target: { value } });
};

describe('Config component', () => {
  describe('should render', () => {
    it('correctly with no initial value', () => {
      render(<Config handleConfig={jest.fn()} />);

      expect(screen.getByTestId('config-input')).toBeInTheDocument();
      expect(screen.getByText('Prettify')).toBeInTheDocument();
      expect(screen.getByText('Apply')).toBeInTheDocument();
    });

    it('correctly with the initial value', () => {
      const initialValue: FormJson = { items: [], controls: [] };
      render(<Config handleConfig={jest.fn()} initialValue={initialValue} />);

      const textarea = screen.getByTestId('config-input');

      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveTextContent('{ "items": [], "controls": [] }');
      expect(screen.getByText('Prettify')).toBeInTheDocument();
      expect(screen.getByText('Apply')).toBeInTheDocument();
    });
  });

  describe('on Prettify button click', () => {
    let configComponent: RenderResult;
    let configInput: HTMLElement;
    let prettifyButton: HTMLElement;
    beforeEach(() => {
      configComponent = render(<Config handleConfig={jest.fn()} />);
      configInput = screen.getByTestId('config-input');
      prettifyButton = screen.getByText('Prettify');
    });
    afterEach(() => {
      configComponent.unmount();
    });
    it('should prettify valid JSON', () => {
      const unprettifiedJSON = '{"key": "value"}';
      insertText(configInput, unprettifiedJSON);

      fireEvent.click(prettifyButton);

      expect(configInput.textContent).toBe('{\n  "key": "value"\n}');
    });

    it('should show error if JSON is invalid', () => {
      const invalidJSON = '{123';
      const errorElement = configComponent.getByTestId('error');

      insertText(configInput, invalidJSON);

      fireEvent.click(prettifyButton);

      expect(errorElement).toHaveTextContent(
        'Unexpected number in JSON at position 1'
      );
    });
    it('should show error if JSON is not an config object', () => {
      const invalidJSON = '123';
      const errorElement = configComponent.getByTestId('error');

      insertText(configInput, invalidJSON);

      fireEvent.click(prettifyButton);

      expect(errorElement).toHaveTextContent(
        'Inputted text is not a valid config'
      );
    });
  });

  describe('on Apply button click', () => {
    let configComponent: RenderResult;
    let configInput: HTMLElement;
    let applyButton: HTMLElement;
    let history: MemoryHistory;
    let handleConfigMock = jest.fn();

    beforeEach(() => {
      history = createMemoryHistory();

      configComponent = render(
        <Router history={history}>
          <Config handleConfig={handleConfigMock} />
        </Router>
      );
      configInput = screen.getByTestId('config-input');
      applyButton = screen.getByTestId('submit-button');
    });

    afterEach(() => {
      configComponent.unmount();
    });
    it('should change page if config is valid', () => {
      const validConfig: FormJson = {
        items: [
          {
            label: 'label',
            name: 'name',
            type: 'text',
          },
        ],
        controls: [
          {
            label: 'OK',
            type: 'submit',
          },
        ],
      };

      insertText(configInput, JSON.stringify(validConfig));

      fireEvent.click(applyButton);

      expect(handleConfigMock).toBeCalledWith(validConfig);
      expect(history.location.pathname).toBe(AppLinks.Result);
    });

    // TODO: add more tests for validation
    describe('should print valditaion error', () => {
      const testForValidation = (
        invalidConfig: FormJson,
        expectedErrorText: string
      ) => {
        const errorElement = screen.getByTestId('error');

        insertText(configInput, JSON.stringify(invalidConfig));

        fireEvent.click(applyButton);

        expect(errorElement.textContent).toBe(expectedErrorText);
      };

      it('if config have empty "items" array', () => {
        const invalidConfig: FormJson = {
          items: [],
          controls: [{ label: '', type: 'submit' }],
        };
        const expectedError =
          'Validation error: /items must NOT have fewer than 1 items';

        testForValidation(invalidConfig, expectedError);
      });

      it('if config have empty "controls" array', () => {
        const invalidConfig: FormJson = {
          items: [{ label: 'l', type: 'text', name: 'l' }],
          controls: [], // probably should be valid, but doesn't make any sense
        };

        const expectedError =
          'Validation error: /controls must NOT have fewer than 1 items';

        testForValidation(invalidConfig, expectedError);
      });

      it('if config have invalid value in item in "items" array', () => {
        const invalidConfig: FormJson = ({
          items: [{ label: 'l', type: '123', name: 'l' }],
          controls: [{ label: '1', type: 'submit' }],
        } as unknown) as FormJson;

        const expectedError =
          'Validation error: /items/0/type must be equal to constant "checkbox"' +
          ' OR /items/0/type must be equal to constant "date"' +
          ' OR /items/0/type must be equal to constant "number"' +
          " OR /items/0 must have required property 'values'" +
          ' OR /items/0/type must be equal to constant "textarea"' +
          ' OR /items/0/type must be equal to constant "text"';

        testForValidation(invalidConfig, expectedError);
      });

      it('if config have wrong type value in "controls" array', () => {
        const invalidConfig: FormJson = ({
          items: [{ label: 'l', type: 'text', name: 'l' }],
          controls: [{ label: '', type: 'data' }],
        } as unknown) as FormJson;

        const expectedError =
          'Validation error: /controls/0/type must be equal to one of the allowed values: "submit","reset"';

        testForValidation(invalidConfig, expectedError);
      });

      it('if config have duplicate name value in "items" array', () => {
        const invalidConfig: FormJson = ({
          items: [
            { label: 'l1', type: 'text', name: 'l' },
            { label: 'l2', type: 'text', name: 'l' },
          ],
          controls: [{ label: '', type: 'submit' }],
        } as unknown) as FormJson;

        const expectedError =
          'Validation error: value "l" of field "name" is not unique!';

        testForValidation(invalidConfig, expectedError);
      });
    });
  });
});
