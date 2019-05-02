import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'store/createStore';
import StyleWrapper from 'theme/StyleWrapper';
import { HomePage } from 'components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StyleWrapper>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </StyleWrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
