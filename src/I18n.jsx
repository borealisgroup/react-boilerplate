import React from 'react';
import i18nConfig from '@borealisgroup/i18n';
import { ENV } from 'config/env.config';
import { I18nextProvider } from 'react-i18next';

const I18n = ({ children }) => {
  const i18nOptions = i18nConfig(
    '1d072bea-f59b-452d-9507-6e6de927b0b1',
    'bcb55981-6723-46a7-bc4f-8817b700f0c0',
    ENV.dev
  );
  return <I18nextProvider i18n={i18nOptions}>{children}</I18nextProvider>;
};

export default I18n;
