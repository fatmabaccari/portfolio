import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lordicon } from '../lordicon/lordicon';
interface ContactLink {
  name: string;
  url: string;
  icon: string;
  external?: boolean;
}
@Component({
  selector: 'app-home',

  imports: [CommonModule, Lordicon],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  contactLinks: ContactLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/feed?...',
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
