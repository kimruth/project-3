import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    AssistanceComponent,
    AProposComponent,
    AccueilComponent,
    FooterComponent,
    TemoignagesComponent,
    AtelierComponent,
    EngagementComponent,
    RessourcesComponent,
    ColaborationComponent,
    AideComponent,
    InformationComponent,
    EvenementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
