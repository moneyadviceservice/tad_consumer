# TAD_CONSUMER

Consumer search for the Travel Adviser Directory

## Prerequisites

- Git
- Node

## Installation

```javascript
git clone https://github.com/moneyadviceservice/tad_consumer.git

cd tad_consumer

    npm install

    npm run dev
```

## Deployment to staging

1. Create a PR to merge into master;
2. Get the approval to 2 devs;
3. Once you get the approval of 2 devs, checkout the staging branch (which is connected to the heroku staging environment) and merge with your feature branch
4. check the progress on https://mas-tad-consumer-staging.herokuapp.com/
5. Get a QA to have a look at your changes

## Test

### Run

To start the test runner run `npm run test`

### Approach

Where possible, the approach to testing should be Test Driven Development (TDD) or at least be written at the same time as the component being tested.

### Tools

This project uses Jest as a test runner and Enzyme as a testing utility.
The documentation for these can be found here:

- [Jest](https://jestjs.io/docs/en/getting-started).
- [Enzyme](https://enzymejs.github.io/enzyme/)

### Location

Where a component has its own folder, the test should be colocated in the folder, however, where the component share folder with other files, the test should be located in `__test__` folder.

### Naming Convention

All test files should have the same name with the their files and also an extension of `.test.js`

### Clean up

After every test there must be a tear down process by unmounting every components used in order to prevent the pollution of test environment

```javascript
...
import { mount } from 'enzyme'
import App from './App'

let wrapped;

beforeEach(()=> {
  wrapped = mount (<App/>)
})

afterEach(() => {
 wrapped.unmount()
})
...
```

### Parent Child Testing

A test for a parent component should not be awareof the internal implementation of its children component. It is enough for it to just be aware the existence of the children components. For instance, to test the Parent component below:

```javascript
...
import Child from './Child' //contains a className .child-class

...
const Parent = (props) => {
  return (
    ...
    <Child />
  )
};

export default Parent;
```

:x: Parent should not have intimate knowledge of the Child component, there should be separate test for the Child component in order to prevent future change in Child component from causing a failure in test for Parent component

```javascript
...
import { shallow } from 'enzyme'
import Parent from './Parent'

it('should render Child component', () => {
  const component = shallow(<Parent/>);
  const child = component.find('.child-class');
  expect(child.length).toBe(1);
})
...
```

:heavy_check_mark: It is enough to know of the existence of the child component

```javascript

...
import { shallow } from 'enzyme'
import Parent from './Parent'
import Child from './Child'

it('should render Child component', () => {
  const component = shallow(<Parent/>);
  expect(component.find(Child).length).toBe(1);
})
...
```

### Bug

Whenever a bug is fixed, there should be a regression test
