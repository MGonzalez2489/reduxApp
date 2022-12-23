import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Conctador] Incrementar');
export const decrementar = createAction('[Conctador] Decrementar');

export const multiplicar = createAction(
  '[Conctador] Multiplicar',
  props<{ numero: number }>()
);
export const dividir = createAction(
  '[Conctador] dividir',
  props<{ numero: number }>()
);
export const reset = createAction('[Conctador] reset');
