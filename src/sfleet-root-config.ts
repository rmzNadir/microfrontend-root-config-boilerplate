import singleSPA, { registerApplication, start } from 'single-spa';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ideally this would be in the parcel that holds the app menu, this is just a config example.
const defLng = localStorage.getItem('i18next');

i18next.use(initReactI18next).init({
  lng: defLng ? JSON.parse(defLng) : 'es-MX',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  resources: {
    'en-US': {
      translation: {},
    },
    'es-MX': {
      translation: {},
    },
  },
});

registerApplication({
  name: '@sfleet/microfront',
  app: () =>
    System.import('@sfleet/microfront') as Promise<singleSPA.LifeCycles<never>>,
  activeWhen: (location: Location) => location.pathname === '/',
  customProps: { i18n: i18next } as any, // Typings for this aren't working correctly
});

start({
  urlRerouteOnly: true,
});
