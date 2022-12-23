import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  multiplicar(): void {
    this.contador *= 2;
    this.emitirContador();
  }
  dividir(): void {
    this.contador /= 2;
    this.emitirContador();
  }
  emitirContador(): void {
    this.cambioContador.emit(this.contador);
  }
}
