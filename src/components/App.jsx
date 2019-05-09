import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { I18n } from 'i18n';
import store from 'store/createStore';
import ThemeWrapper from 'theme/ThemeWrapper';
import { TodoPage } from 'components';

const App = () => (
  <Provider store={store}>
    <ThemeWrapper>
      <I18n>
        <Suspense fallback={<div />}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={TodoPage} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </I18n>
    </ThemeWrapper>
  </Provider>
);

export default App;
