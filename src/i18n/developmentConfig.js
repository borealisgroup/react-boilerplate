import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';
import Editor from 'locize-editor';
import i18n from './sharedConfig';

const locizeOptions = {
  projectId: '1d072bea-f59b-452d-9507-6e6de927b0b1',
  apiKey: 'bcb55981-6723-46a7-bc4f-8817b700f0c0',
  referenceLng: 'en',
};

i18n
  .use(Backend)
  .use(LastUsed)
  .use(Editor)
  .init({
    debug: true,
    saveMissing: true,
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    editor: {
      ...locizeOptions,
      onEditorSaved: async (lng, ns) => {
        await i18n.reloadResources(lng, ns);
        i18n.emit('editorSaved');
      },
    },
    react: {
      bindI18n: 'languageChanged editorSaved',
    },
  });

export default i18n;
