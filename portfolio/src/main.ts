import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';  
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';




const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(SlickCarouselModule)
  ]
};


bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));
