import React from 'react';
import { shallow } from 'enzyme';
import { InputFileForm } from '..';

describe('InputFileForm Component', () => {
  describe('user possibly create a InputFileForm component.', () => {
    it('should render a InputFileForm', () => {
      const component = shallow(<InputFileForm />);

      expect(component).toMatchSnapshot();
    });
  });
});
