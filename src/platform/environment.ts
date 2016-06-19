
// Angular 2

import { CompilerConfig } from '@angular/compiler';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES, enableProdMode } from '@angular/core';
// Environment Providers
let PROVIDERS = [
  // common env directives
];

if ('production' === ENV) {
  // Production
  enableProdMode();
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in production
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS,
    // custom providers in development
  ];

}


export const ENV_PROVIDERS = [
  ...PROVIDERS
];
