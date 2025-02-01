import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TemoignagesComponent } from './pages/blog/temoignages/temoignages.component';
import { AtelierComponent } from './pages/assistance/atelier/atelier.component';
import { EngagementComponent } from './pages/assistance/engagement/engagement.component';
import { RessourcesComponent } from './pages/a-propos/ressources/ressources.component';
import { ColaborationComponent } from './pages/a-propos/colaboration/colaboration.component';
import { AideComponent } from './pages/a-propos/aide/aide.component';
import { InformationComponent } from './pages/blog/information/information.component';
import { EvenementComponent } from './pages/blog/evenement/evenement.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HighlightDirective } from './pages/directives/highlight.directive';
import { WordPipe } from './pages/pipes/word.pipe';
import { BgSizePipe } from './pages/pipes/bg-size.pipe';
import { PrevDirective } from './pages/directives/prev.directive';
import { NextDirective } from './pages/directives/next.directive';
import { CommentFormComponent } from "./pages/blog/comment-form/comment-form/comment-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AssistanceComponent,
    AProposComponent,
    AccueilComponent,
    FooterComponent,
    AtelierComponent,
    EngagementComponent,
    RessourcesComponent,
    ColaborationComponent,
    AideComponent,
    InformationComponent,
    EvenementComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ContactComponent,
    HighlightDirective,
    WordPipe,
    BgSizePipe,
    PrevDirective,
    NextDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemoignagesComponent,
    CommentFormComponent,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
