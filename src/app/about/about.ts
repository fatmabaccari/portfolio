
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
   imports: [CommonModule,TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
   constructor(private translate: TranslateService) {}

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
