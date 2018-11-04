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

//Practice tests

describe('Adding numbers in this test', () => {
  it('two plus two will be greater than or equal to four', () => {
    expect(2 + 2).toBeLessThan(6);
  });
  it('adds dog and cat to equal bird', () => {
    let cat = 2, dog = 6, bird = 8;
    expect(cat + dog).toBe(bird);
  })
});

describe('Subtracting numbers in this test', () => {
  it('subtracts fish from seagull and it will be less than 18', () => {
    let fish = 4, seagull = 20;
    expect(seagull - fish).toBeLessThan(17);
  })
})

/* Default test made by webpacker
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
