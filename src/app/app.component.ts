import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-3';
  
  isActive: boolean = true;

  constructor( private themeService: ThemeService ){}
  
    // toggleTheme(): void {
    //   this.themeService.toggleDarkMode();
    // }
    
}
