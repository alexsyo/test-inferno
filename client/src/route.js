export const load = (route) => {
  // route getComponent function
  return (location, callback) => {
    // load the component asynchronously
    import(`./components/Routes/${route}/${route}.js`).then((Route) => {
      // return the component once loaded
      callback(null, Route.default);
    });
  }
}