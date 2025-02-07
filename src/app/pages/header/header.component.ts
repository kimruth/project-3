import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
// import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private searchService: SearchService,
    // private themeService: ThemeService
  ){}

  dropdownOpen: { [key: string]: boolean } = {
    services: false,
    contact: false,
  };

  toggleDropdown(menu: string) {
    this.dropdownOpen[menu] = !this.dropdownOpen[menu];
  }

  // toggleTheme(): void {
  //   this.themeService.toggleDarkMode();
  // }

  logout(){
    localStorage.removeItem('auth')
    this.router.navigate(['signin'])
  }

}
