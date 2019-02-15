import React from 'react';
import { shallow } from 'enzyme';
import { Wave } from '..';

describe('Wave Component', () => {
  describe('user possibly create a Wave component.', () => {
    it('should render a Wave', () => {
      const component = shallow(<Wave />);

      expect(component).toMatchSnapshot();
    });
  });
});
