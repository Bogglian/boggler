import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  describe('user possibly create a App component.', () => {
    it('should render a App', () => {
      const component = shallow(<App />);

      expect(component).toMatchInlineSnapshot(`
ShallowWrapper {
  Symbol(enzyme.__root__): [Circular],
  Symbol(enzyme.__unrendered__): <App />,
  Symbol(enzyme.__renderer__): Object {
    "batchedUpdates": [Function],
    "checkPropTypes": [Function],
    "getNode": [Function],
    "render": [Function],
    "simulateError": [Function],
    "simulateEvent": [Function],
    "unmount": [Function],
  },
  Symbol(enzyme.__node__): Object {
    "instance": null,
    "key": undefined,
    "nodeType": "class",
    "props": Object {},
    "ref": null,
    "rendered": null,
    "type": [Function],
  },
  Symbol(enzyme.__nodes__): Array [
    Object {
      "instance": null,
      "key": undefined,
      "nodeType": "class",
      "props": Object {},
      "ref": null,
      "rendered": null,
      "type": [Function],
    },
  ],
  Symbol(enzyme.__options__): Object {
    "adapter": ReactSixteenAdapter {
      "options": Object {
        "enableComponentDidUpdateOnSetState": true,
        "legacyContextMode": "parent",
        "lifecycles": Object {
          "componentDidUpdate": Object {
            "onSetState": true,
          },
          "getChildContext": Object {
            "calledByRenderer": false,
          },
          "getDerivedStateFromProps": true,
          "getSnapshotBeforeUpdate": true,
          "setState": Object {
            "skipsComponentDidUpdateOnNullish": true,
          },
        },
      },
    },
  },
}
`);
    });
  });
});
