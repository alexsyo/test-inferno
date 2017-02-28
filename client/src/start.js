import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import { Provider } from 'inferno-redux';
import history from './libs/history.js';
import * as route from './libs/route.js';
import store from './redux/store';
import html from './index.html';
import css from './css/main.scss';
import App from './App';

Inferno.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute getComponent={route.load('Home')} />
        <Route path="/stuff" getComponent={route.load('Stuff')} />
        <Route path="/friends" getComponent={route.load('Friends')} />
        <Route path="/form" getComponent={route.load('Form', 'FormLayout')}>
          <IndexRoute getComponent={route.load('Form')} />
          <Route path="/form/thank-you" getComponent={route.load('Form', 'ThankYou')} />
        </Route>
        <Route path="/about" getComponent={route.load('About')} />
        <Route path="*" getComponent={route.load('Home')} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);