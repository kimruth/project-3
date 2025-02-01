import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  title = 'Accueil';
  description = 'Bienvenue sur notre site web !';
  image = 'assets/images/accueil.jpg';
  button = 'Découvrir plus';
  link = 'https://www.google.com';
  date = new Date();
  name = 'John Doe';
  age = 30;
  hobbies = ['Jouer au football', 'Lire des livres', 'écouter', 'de la musique'];
  isFavorite = true;
  isDisabled = false;
  isHidden = false;
  isCollapsed = true;
  isExpanded = false;
  isHovered = false;
  isFocused = false;
  isMouseOver = false;
  isMouseOut = false;
  isMouseLeave = false;
  isMouseEnter = false;
}
