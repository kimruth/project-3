import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { lockGuard } from './auth/guard/lock.guard';
import { logoutGuard } from './auth/guard/logout.guard';
// import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { EvenementComponent } from './pages/blog/evenement/evenement.component';

const routes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full'},
  {path:'signup', component:SignupComponent, title:'Signup', canActivate:[logoutGuard]},
  {path:'signin', component:SigninComponent, title:'Signin', canActivate:[logoutGuard]},
  {path: 'accueil', component: AccueilComponent, title: "page d'accueil",},
  {path: 'blog', title: 'blog pages', component: BlogComponent},
  // {path: 'evenement', component: EvenementComponent},
  {path: 'assistance', title: 'assistance pages', component: AssistanceComponent},
  {path: 'a-propos', title: 'a-propos pages', component: AProposComponent},
  {path: 'contact', title: 'contact pages', component: ContactComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
