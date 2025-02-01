import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { importProvidersFrom } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppModule } from './app/app.module';
// import { CommentFormComponent } from './app/pages/blog/comment-form/comment-form/comment-form.component';
// import { TemoignagesComponent } from './app/pages/blog/temoignages/temoignages.component';

// bootstrapApplication(CommentFormComponent, {
//   providers: [provideHttpClient(), importProvidersFrom(FormsModule)]
// });

// bootstrapApplication(TemoignagesComponent, {
//   providers: [provideHttpClient(), importProvidersFrom(FormsModule)]
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
