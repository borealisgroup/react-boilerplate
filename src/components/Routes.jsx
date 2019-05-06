import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useRouter from 'use-react-router';
import { useSelector, useDispatch } from 'react-redux';

import { TodoPage } from 'components';
import { getUser } from 'store/user/todo.selectors';
import { userUpdate } from 'store/user/user.duck';

const useChangeLanguageBasedOnUrlParams = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(getUser);
  const {
    match: {
      params: { language: languageFromParams },
    },
  } = useRouter();
  if (languageFromParams && languageFromParams !== language) {
    dispatch(userUpdate({ language: languageFromParams }));
  }
};

const Routes = () => {
  const { language } = useSelector(getUser);
  const {
    match: { path },
  } = useRouter();
  useChangeLanguageBasedOnUrlParams();
  return (
    <Switch>
      <Route path={`${path}/todo`} exact component={TodoPage} />
      <Redirect from="/" to={`/${language}/todo`} />
    </Switch>
  );
};

export default Routes;
