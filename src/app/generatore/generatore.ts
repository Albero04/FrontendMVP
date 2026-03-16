import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Menutendina } from '../components/menutendina/menutendina';
import { Button } from '../components/button/button';
import { Prompt } from '../components/prompt/prompt';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

//servizi
import { AiAssistantService } from '../../services/ai-assistant-service';
@Component({
  selector: 'app-generatore',
  imports: [FormsModule, Prompt, Menutendina, ButtonModule, Button],
  templateUrl: './generatore.html',
  styleUrl: './generatore.css',
})
export class Generatore {
  private router = inject(Router);
  private aiService = inject(AiAssistantService);
  tones: any[] | undefined;
  selectedTone: any;
  styles: any[] | undefined;
  selectedStyle: any;
  prompt: string = '';
  NavigateToRisultatoGenerazione() {
    this.aiService.requireGeneration(this.prompt, this.selectedTone, this.selectedStyle); // Invia la richiesta di generazione al servizio
    this.aiService.currentResult$.subscribe(result => {
      if (result) {
        this.router.navigate(['/risultato-generazione'], {
          state: {
            result: result
          }
        });
      }
    });
  }
  ngOnInit() {
    
    this.tones= [
      { name: 'Simpatico', code: 'simpatico' },
      { name: 'Formale', code: 'formale' },
      { name: 'Creativo', code: 'creativo' },
    ];
    this.styles= [
      { name: 'Conversazionale', code: 'conversazionale' },
      { name: 'Essenziale', code: 'essenziale' },
      { name: 'Articolato', code: 'articolato' },
    ];
  }
}
