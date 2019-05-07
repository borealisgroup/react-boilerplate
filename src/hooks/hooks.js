import { en, fr, nl } from 'translations';
import { getUser } from 'store/user/todo.selectors';
import { useSelector } from 'react-redux';

export const useTranslation = () => {
  const { language } = useSelector(getUser);
  const translations = { en, fr, nl };

  const selectedTranslation = translations[language];
  if (!selectedTranslation)
    throw new Error(`${language} is not a valid language`);
  const t = label => {
    const value = selectedTranslation[label];
    if (!value) return `${label} not yet available in ${language}`;
    return value;
  };
  return { t };
};
