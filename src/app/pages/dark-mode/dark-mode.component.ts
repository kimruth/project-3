import { Component } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-dark-mode",
  templateUrl: "./dark-mode.component.html",
  // styleUrls: ["./dark-mode.component.css"],
})
export class DarkModeComponent {
  constructor(private themeService: ThemeService) {}

  // toggleDarkMode(): void {
  //   this.themeService.toggleTheme();
  // }
}
