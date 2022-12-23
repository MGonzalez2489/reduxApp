import { createReducer, on } from '@ngrx/store';
import {
  decrementar,
  dividir,
  incrementar,
  multiplicar,
  reset,
} from './contador.actions';
export const initialState = 10;
const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, payload) => state / payload.numero),
  on(reset, () => initialState)
);

export function contadorReducer(state: any, action: any) {
  return _contadorReducer(state, action);
}
