
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Bar } from "./bar/bar";
import { StarBackground } from './star-background/star-background';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    About,
    Projects,
    Bar,
    StarBackground,

    TranslateModule 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  darkMode = true;
  isOpen = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
    document.documentElement.classList.add('dark');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
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

