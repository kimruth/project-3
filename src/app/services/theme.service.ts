import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // private darkModeKey = 'dark-mode'

  // constructor() {
  //   this.loadTheme()
  // }

  // // toggle between dark mode and light mode
  // toggleDarkMode(): void {
  //   document.body.classList.toggle('dark-mode');
  //   const isDarkMode = document.body.classList.contains('dark-mode');
  //   // localStorage.setItem(this.darkModeKey, isDarkMode ? 'true' : 'false');
  //   localStorage.setItem(this.darkModeKey, JSON.stringify(isDarkMode));
  // }

  // // Load the theme from local storage
  // loadTheme(): void {
  //   const savedTheme = localStorage.getItem(this.darkModeKey);
  //   if (savedTheme === 'true') {
  //     document.body.classList.add('dark-them')
  //   }
  // }


  private darkModeKey = "dark-mode";

  constructor() {
    this.loadTheme();
  }

  enableDarkMode(): void {
    document.body.classList.add("dark-mode");
    localStorage.setItem(this.darkModeKey, "enabled");
  }

  disableDarkMode(): void {
    document.body.classList.remove("dark-mode");
    localStorage.setItem(this.darkModeKey, "disabled");
  }

  toggleTheme(): void {
    if (document.body.classList.contains("dark-mode")) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  private loadTheme(): void {
    const isDarkMode = localStorage.getItem(this.darkModeKey) === "enabled";
    if (isDarkMode) {
      this.enableDarkMode();
    }
  }
}
