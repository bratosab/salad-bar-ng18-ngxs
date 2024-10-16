import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';
import { provideStore } from '@ngxs/store';
import { OrderState } from './store/order.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore([OrderState], withNgxsReduxDevtoolsPlugin(), withNgxsRouterPlugin()),
  ],
};
