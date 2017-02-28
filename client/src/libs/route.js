export const load = (path, route = path) => {
  // route getComponent function
  return (location, callback) => {
    // load the component asynchronously
    import(`../components/Routes/${path}/${route}.js`).then((Route) => {
      // return the component once loaded
      callback(null, Route.default);
    });
  }
}