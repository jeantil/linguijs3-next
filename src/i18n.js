import { setupI18n } from "@lingui/core";
import catalogFr from './locales/fr/messages';

export const locales = {
  en: "English", 
  fr: "French"
}

function loadCatalog(locale) {
  console.log(locale);
  /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  return import(`./locales/${locale}/messages.js`)
}

export const i18n = setupI18n({catalogs:{'fr':catalogFr}})
i18n.willActivate(loadCatalog)