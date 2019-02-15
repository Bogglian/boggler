import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  describe('user possibly create a App component.', () => {
    it('should render a App', () => {
      const component = shallow(<App />);

      expect(component).toMatchSnapshot();
    });
  });
});
