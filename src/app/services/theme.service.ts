import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeKey = 'dark-mode'

  constructor() {
    this.loadTheme()
  }

  // toggle between dark mode and light mode
  toggleDarkMode(): void {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    // localStorage.setItem(this.darkModeKey, isDarkMode ? 'true' : 'false');
    localStorage.setItem(this.darkModeKey, JSON.stringify(isDarkMode));
  }

  // Load the theme from local storage
  loadTheme(): void {
    const savedTheme = localStorage.getItem(this.darkModeKey);
    if (savedTheme === 'true') {
      document.body.classList.add('dark-them')
    }
  }
}
