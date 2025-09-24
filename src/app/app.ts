import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Projects } from "./projects/projects";

import { Bar } from "./bar/bar";
import { StarBackground } from './star-background/star-background';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, Home, About, Projects, Bar, StarBackground],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('frontend');

  // 👇 Ajoute ça
  darkMode = true; 
  isOpen = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    // Ajout/suppression de la classe "dark" sur <html> (pour Tailwind)
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
