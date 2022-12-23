import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reduxApp';
  contador: number;
  constructor() {
    this.contador = 10;
  }

  incrementar(): void {
    this.contador++;
  }
  decrementar(): void {
    this.contador--;
  }
}
