import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
// import { EvenementComponent } from './pages/blog/evenement/evenement.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, title: "page d'accueil"},
  {path: 'blog', title: 'blog pages', component: BlogComponent,
// children: [
//   {path: 'evenement:name', component: EvenementComponent}
// ]
},
  {path: 'assistance', title: 'assistance pages', component: AssistanceComponent},
  {path: 'a-propos', title: 'a-propos pages', component: AProposComponent},
  {path: 'contact', title: 'contact pages', component: ContactComponent},


  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
