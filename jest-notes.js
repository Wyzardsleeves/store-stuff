//Just is seemingly from Facebook

run test                    //npm test
install enzyme for testing  //https://airbnb.io/enzyme/docs/installation/react-15.html
other way of installing enzyme  //yarn add enzyme jest
//include enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

create a new test for Component //touch src/Components/SampleName.test.js
add shallow to CompName.test.js //import {shallow} from 'enzyme';

//configure a setupTests.js file
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//example of test
describe('What is being tested', () => {
  it('what tested object/component should be doing', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  })
})

//testing methods (https://jestjs.io/docs/en/using-matchers)
expect(somethingHere).toBe(#)         //check for value
expect(somethingHere).toHaveLength(#) //check for length
expect(somethingHere).toEqual(#)      //check for equality
expect(somethingHere).not.toBe(#)     //check for not having value of
expect(somethingHere).toBeNull();     //checks for something to be null
expect(somethingHere).toBeDefined();  //checks for defined
expect(somethingHere).not.toBeUndefined();  //checks for not undefined
expect(somethingHere).not.toBeTruthy(); //checks for not truthy
expect(somethingHere).toBeFalsy();    //checks for false
