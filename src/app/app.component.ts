import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-3';
  
  isActive: boolean = true;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ){}

  
    toggleTheme(): void {
      this.themeService.toggleDarkMode();
    }
  // logout(){  
    
  //   localStorage.removeItem('auth')
  //   this.router.navigate(['signin'])
    
  // }
}
