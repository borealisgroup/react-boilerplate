import { ENV } from 'config/env.config';

export const loadI18n = async () => {
  if (ENV.dev) {
    await import('i18n/developmentConfig');
  } else {
    await import('i18n/productionConfig');
  }
};
