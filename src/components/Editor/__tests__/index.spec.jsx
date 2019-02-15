import React from 'react';
import { shallow } from 'enzyme';
import { Editor } from '..';

describe('Editor Component', () => {
  describe('user possibly create a Editor component.', () => {
    it('should render a Editor', () => {
      const component = shallow(<Editor />);

      expect(component).toMatchSnapshot();
    });
  });
});
