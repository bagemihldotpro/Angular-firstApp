import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button hero nbButton *ngIf="value==null" status="danger">{{ value != null ? value : "&nbsp;" }}</button>
    <button *ngIf="value=='X'" hero nbButton status="success">{{ value != null ? value : "&nbsp;" }}</button>
    <button hero nbButton *ngIf="value=='O'" status="warning">{{ value != null ? value : "&nbsp;" }}</button>
  `,
  styles: [
    'app-square { width: 100%; height: 100%; }',
    'button {  width: 100%; height: 100%; font-size: 5em !important; }'
  ]
})
export class SquareComponent  {
  @Input() value;
  

}
