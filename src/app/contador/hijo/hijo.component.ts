import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ContadorActions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  contador: number;
  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar(): void {
    this.store.dispatch(ContadorActions.multiplicar({ numero: 5 }));
  }
  dividir(): void {
    this.store.dispatch(ContadorActions.dividir({ numero: 2 }));
  }
}
