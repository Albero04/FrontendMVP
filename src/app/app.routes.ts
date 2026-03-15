import { Routes } from '@angular/router';
import { Generatore } from './generatore/generatore';
import { RisultatoGenerazione } from './risultato-generazione/risultato-generazione';
import { StoricoAiAssistant } from './storico-ai-assistant/storico-ai-assistant';
import { StoricoAiCopilot } from './storico-ai-copilot/storico-ai-copilot';

export const routes: Routes = [
  { path: 'generatore', component: Generatore },
  { path: 'risultato-generazione', component: RisultatoGenerazione },
  { path: 'storico-ai-assistant', component: StoricoAiAssistant },
  { path: 'storico-ai-copilot', component: StoricoAiCopilot}
];
