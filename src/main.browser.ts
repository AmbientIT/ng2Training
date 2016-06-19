/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
/*
* Platform and Environment
* our providers/directives/pipes
*/
import { PLATFORM_PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';

/*
* App Component
* our top level component that holds all of our components
*/
import { App, APP_PROVIDERS } from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(App, [
  ...PLATFORM_PROVIDERS,
  ...ENV_PROVIDERS,
  ...APP_PROVIDERS
])
.catch(err => console.error(err));
