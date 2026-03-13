import { Routes } from '@angular/router';
import { Generatore } from './generatore/generatore';
import { RisultatoGenerazione } from './risultato-generazione/risultato-generazione';
import { StoricoAiAssistant } from './storico-ai-assistant/storico-ai-assistant';

export const routes: Routes = [
  { path: 'generatore', component: Generatore },
  { path: 'risultato-generazione', component: RisultatoGenerazione },
  { path: 'storico-ai-assistant', component: StoricoAiAssistant },
];