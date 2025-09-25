import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lordicon } from '../lordicon/lordicon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
interface ContactLink {
  name: string;
  url: string;
  icon: string;
  external?: boolean;
}
@Component({
  selector: 'app-home',

  imports: [CommonModule, Lordicon,TranslateModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   constructor(private translate: TranslateService) {}

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  contactLinks: ContactLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/baccari-fatma-3b8a952b5/',
      icon: 'assets/icons/linkdin.json',
      external: true,
    },
    {
      name: 'Github',
      url: 'https://github.com/fatmabaccari',
      icon: 'assets/icons/github.json',
      external: true,
    },

    { name: 'Email', url: 'mailto:baccarifatma842003@gmail.com', icon: 'assets/icons/gmail.json' },
    { name: 'Mobile', url: 'tel:+21655398410', icon: 'assets/icons/mobile.json' },
  ];
  
}
