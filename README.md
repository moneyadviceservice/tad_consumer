# TAD_CONSUMER

Consumer search for the Travel Adviser Directory. 

This directory was built as a MAS-branded standalone directory. This is currently live at [this address](https://traveldirectory.moneyadviceservice.org.uk) and hosted and administered via this [Heroku account](https://dashboard.heroku.com/apps/mas-tad-consumer-production).

## Transition to AEM

During the transition period before the finalisation of the 3-2-1 project we will run two environments for this directory in order to allow the site to: 
- continue to function as a standalone MAS-branded directory and
- be built as a component mounted in AEM without headers and footers and with the new Money Helper branding

The Money Helper branded component is now contained in the `12191_Main-only-for-AEM` branch of this repo, and this is administered and deployed via the [mas-tad-consumer-aem-321](https://dashboard.heroku.com/apps/mas-tad-consumer-aem-321) Heroku account.

This means that any changes required to the standalone directory will be made to the current `master` branch and the `12191_Main-only-for-AEM` will need to be rebased to the updated master once these are merged.

Any changes required only for the Money Helper branded site should be made to the `12191_Main-only-for-AEM` branch and this should then be the branch that is deployed for mounting on the AEM site.

Once the transition is complete the standalone MAS-branded directory will no longer be live and the changes in the `12191_Main-only-for-AEM` branch can be merged into the master branch.


## Prerequisites

- Git
- Node

## Installation

```javascript
git clone https://github.com/moneyadviceservice/tad_consumer.git

cd tad_consumer

    npm install

    npm run dev

    cp .env.local.example .env.local
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
