import React from 'react';
import renderer from 'react-test-renderer';
import PastLaunches from '../src/screens/pastlaunches';
describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(0);
  });
});


test('renders correctly', () => {
  const tree = renderer.create(<PastLaunches />).toJSON();
  expect(tree).toMatchSnapshot();
});
