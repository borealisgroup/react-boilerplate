import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import store, { history } from 'store/createStore';
import StyleWrapper from 'theme/StyleWrapper';
import { HomePage } from 'components';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StyleWrapper>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </StyleWrapper>
    </ConnectedRouter>
  </Provider>
);

export default App;
