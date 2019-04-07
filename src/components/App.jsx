import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store, { history } from 'store/createStore';
import theme from 'theme/defaultTheme';
import GlobalStyle from 'theme/globalStyle';
import { HomePage } from 'components';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
