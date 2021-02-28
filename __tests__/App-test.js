import React from 'react';
import renderer from 'react-test-renderer';
import PastLaunches from '../src/screens/pastlaunches';
import LaunchItem from "../src/components/organisms/launchitem";
import MockAdapter from 'axios-mock-adapter';
import Faker from 'faker'
// import ApiClient from '../constants/api-client';
// import userDetails from 'jest/mockResponseObjects/user-objects';

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


test('renders correctly', () => {
  const tree = renderer.create(<LaunchItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
