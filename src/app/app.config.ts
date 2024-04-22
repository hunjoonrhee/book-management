import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BookReducer } from './books/book.reducer';
import { provideStore, StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { BookEffects } from './books/book.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot<AppState>({
        book: BookReducer,
      }),
      EffectsModule.forRoot([BookEffects]),
      StoreDevtoolsModule.instrument()
    ),
  ],
};
