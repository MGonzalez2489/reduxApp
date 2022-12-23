import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as ContadorActions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reduxApp';
  contador: number;
  constructor(private store: Store<AppState>) {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  incrementar(): void {
    this.store.dispatch(ContadorActions.incrementar());
  }
  decrementar(): void {
    this.store.dispatch(ContadorActions.decrementar());
  }
}
