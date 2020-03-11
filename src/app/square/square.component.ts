import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <nb-reveal-card>
      <nb-card-front>
        <nb-card>
          <nb-card-body>
            {{ value }}
          </nb-card-body>
        </nb-card>
      </nb-card-front>
      <nb-card-back>
        <nb-card>
          <nb-card-body>
          {{ value }}
          </nb-card-body>
        </nb-card>
      </nb-card-back>
    </nb-reveal-card>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {
  @Input() value;
  

}
