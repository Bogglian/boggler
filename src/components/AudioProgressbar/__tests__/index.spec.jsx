import React from 'react';
import { shallow } from 'enzyme';
import { AudioProgressbar } from '..';

describe('AudioProgressbar Component', () => {
  describe('user possibly create a AudioProgressbar component.', () => {
    it('should render a AudioProgressbar', () => {
      const component = shallow(<AudioProgressbar />);

      expect(component).toMatchSnapshot();
    });
  });
});
