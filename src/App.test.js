import ReactDOM from 'react';
import React from 'react';
import SamuraiJSApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
