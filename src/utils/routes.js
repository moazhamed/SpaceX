let mainRoutes = {
  baseURL: 'https://api.spacexdata.com/v4',
};

let routes = {
  launchesController: {
    NextLaunch: mainRoutes.baseURL + '/launches/next',
    PastLaunches: mainRoutes.baseURL + '/launches/past',
    QueryLaunches: mainRoutes.baseURL + '/launches/query',
  },
};

export default routes;
