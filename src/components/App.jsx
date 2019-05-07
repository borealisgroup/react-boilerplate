import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from 'store/createStore';
import ThemeWrapper from 'theme/ThemeWrapper';
import { TodoPage } from 'components';

const App = () => (
  <Provider store={store}>
    <ThemeWrapper>
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={TodoPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ThemeWrapper>
  </Provider>
);

export default App;
