import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

describe('<App /> component tests pass', () => {
  it('renders the <App /> component without crashing', () => {
    const appComponent = shallow(<App />);
    expect(appComponent).toHaveLength(1);
  });
});


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
