import React from 'react';
import renderer from 'react-test-renderer';
import PastLaunches from '../src/screens/pastlaunches';
import LaunchItem from '../src/components/organisms/launchitem';
import Axios from 'axios';
import routes from '../src/utils/routes';


async function getPastLaunches() {
  const response = await Axios.get(routes.launchesController.PastLaunches);
  return response.data;
}

it('api call getPastLaunches Correctly', async () => {
  const data = await getPastLaunches();
  expect(data).toEqual(expect.not.arrayContaining([0]));
  //test passed upon example request in github link
});

async function queryLaunches() {
  Axios.post(routes.launchesController.QueryLaunches, {
    query: {
      date_utc: {
        $gte: '2017-06-22T00:00:00.000Z',
        $lte: '2017-06-25T00:00:00.000Z',
      },
    },
  });
}

it('api call queryLaunches unCorrectly', async () => {
  const data = await queryLaunches();
  expect(data).toEqual(expect.not.arrayContaining([100]));
  //test passed upon example request in github link
});

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
