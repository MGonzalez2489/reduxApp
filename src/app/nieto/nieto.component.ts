import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent {
  @Input() contador: number;

  reset(): void {
    this.contador = 0;
  }
}
