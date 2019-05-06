import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import store from 'store/createStore';
import ThemeWrapper from 'theme/ThemeWrapper';
import { TodoPage } from 'components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeWrapper>
        <Switch>
          <Route path="/:language/todo" exact component={TodoPage} />
          <Redirect from="/" to="/en/todo" />
        </Switch>
      </ThemeWrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
