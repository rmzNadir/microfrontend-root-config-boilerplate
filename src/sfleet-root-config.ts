import singleSPA, { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@sfleet/microfront',
  app: () =>
    System.import('@sfleet/microfront') as Promise<singleSPA.LifeCycles<never>>,
  activeWhen: (location: any) => location.pathname === '/',
});

start({
  urlRerouteOnly: true,
});
