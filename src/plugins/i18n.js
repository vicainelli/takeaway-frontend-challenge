import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../translations';

Vue.use(VueI18n)

const locale = window.navigator.language ? window.navigator.language.substring(0, 2) : 'en'

export function createI18n() {
  return new VueI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages
  })
}
