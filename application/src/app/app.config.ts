// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';


// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideClientHydration(),
//     importProvidersFrom(),
//   ]
// };

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FontAwesomeModule),
    {
      provide: 'fa-icon-init',
      useFactory: (library: FaIconLibrary) => {
        library.addIconPacks(fas);
        return true;
      },
      deps: [FaIconLibrary]
    }
  ]
};