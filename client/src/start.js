import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import { Provider } from 'inferno-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import * as route from './route.js';
import store from './redux/store';
import html from './index.html';
import css from './css/main.scss';
import App from './App';

const browserHistory = createBrowserHistory();


Inferno.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <IndexRoute getComponent={route.load('Home')} />
        <Route path="/stuff" getComponent={route.load('Stuff')} />
        <Route path="/friends" getComponent={route.load('Friends')} />
        <Route path="/about" getComponent={route.load('About')} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);