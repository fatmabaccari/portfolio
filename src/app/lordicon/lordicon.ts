import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lordicon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <lord-icon
      [attr.src]="src"
      [attr.trigger]="trigger"
      [style.width]="width"
      [style.height]="height"
       [style.color]="color">
    </lord-icon>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  
})
export class Lordicon {
  @Input() src!: string;
  @Input() trigger: string = 'hover';
  @Input() width: string = '50px';
  @Input() height: string = '50px';
  @Input() color: string = 'black';  
}
