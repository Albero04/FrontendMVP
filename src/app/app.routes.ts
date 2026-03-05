import { Routes } from '@angular/router';
import { Generatore } from './generatore/generatore';
import { RisultatoGenerazione } from './risultato-generazione/risultato-generazione';

export const routes: Routes = [
  { path: 'generatore', component: Generatore },
  { path: 'risultato-generazione', component: RisultatoGenerazione },
];