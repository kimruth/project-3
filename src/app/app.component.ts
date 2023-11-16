import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-3';
  
  isActive: boolean = true;

  constructor(
    private router: Router
  ){}
  logout(){
    
    localStorage.removeItem('auth')
    this.router.navigate(['signin'])
    
  }
}
