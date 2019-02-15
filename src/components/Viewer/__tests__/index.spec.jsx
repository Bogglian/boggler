import React from 'react';
import { shallow } from 'enzyme';
import { Viewer } from '..';

describe('Viewer Component', () => {
  describe('user possibly create a Viewer component.', () => {
    it('should render a Viewer', () => {
      const component = shallow(<Viewer />);

      expect(component).toMatchSnapshot();
    });
  });
});
