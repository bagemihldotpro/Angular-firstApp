import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button hero nbButton *ngIf="value==null">{{ value != null ? value : "&nbsp;" }}</button>
    <button *ngIf="value=='X'" hero nbButton>{{ value != null ? value : "&nbsp;" }}</button>
    <button hero nbButton *ngIf="value=='O'">{{ value != null ? value : "&nbsp;" }}</button>
  `,
  styles: ['button { line-height: 100%; width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {
  @Input() value;
  

}
