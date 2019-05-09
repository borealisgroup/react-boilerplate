import React from 'react';
import i18nConfig from '@borealisgroup/i18n-prod';
import { I18nextProvider } from 'react-i18next';

const I18n = ({ children }) => (
  <I18nextProvider i18n={i18nConfig}>{children}</I18nextProvider>
);

export default I18n;
