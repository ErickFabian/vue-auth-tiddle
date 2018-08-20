import Vue from 'vue'
import VueI18n from 'vue-i18n'

import EnLocale from './locales/en'
import EsLocale from './locales/es'

const DEFAULT_LOCALE = 'es'

const messages = Object.assign({}, EnLocale, EsLocale);

Vue.use(VueI18n);

export default new VueI18n({
  locale: DEFAULT_LOCALE, messages
});
