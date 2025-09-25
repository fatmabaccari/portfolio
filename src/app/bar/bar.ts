import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Lordicon } from '../lordicon/lordicon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface ContactLink {
  name: string;
  url: string;
  icon: string;
  external?: boolean;
}

@Component({
  selector: 'app-bar',
  imports: [CommonModule, Lordicon,TranslateModule],
  templateUrl: './bar.html',
  styleUrls: ['./bar.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Bar implements OnInit {
  isOpen = false;
  opencontact = false;
    @Input() darkMode = true;
  @Output() darkModeToggled = new EventEmitter<boolean>();
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.contact-menu')) {
      this.opencontact = false;
    }
  }

  contactLinks: ContactLink[] = [
    { name: 'Github', url: 'https://github.com/fatmabaccari', icon: 'assets/icons/github.json', external: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/baccari-fatma-3b8a952b5/', icon: 'assets/icons/linkdin.json', external: true },
    { name: 'Email', url: 'mailto:baccarifatma842003@gmail.com', icon: 'assets/icons/gmail.json' },
    { name: 'Mobile', url: 'tel:+21655398410', icon: 'assets/icons/mobile.json' }
  ];

  togglecontactMenu() {
    this.opencontact = !this.opencontact;
  }

scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const navHeight = 64; 
  const targetY = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 1000; 
  let startTime: number | null = null;

  function animateScroll(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress;
    window.scrollTo(0, startY + distance * ease);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}




ngOnInit() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    this.darkMode = savedTheme === 'dark';
  } else {
    this.darkMode = true; 
  }
  this.updateTheme();
}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.updateTheme();
    this.darkModeToggled.emit(this.darkMode);
  }

private updateTheme() {
  if (this.darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}


  currentLang: 'en' | 'fr' = 'fr';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  toggleLang() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.translate.use(this.currentLang);
  }
}
