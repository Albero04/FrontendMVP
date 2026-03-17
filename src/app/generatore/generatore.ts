import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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
  imports: [FormsModule, Prompt, Menutendina, ButtonModule, Button, AsyncPipe],
  templateUrl: './generatore.html',
  styleUrl: './generatore.css',
})
export class Generatore {
  private router = inject(Router);
  private aiService = inject(AiAssistantService);

  // in questo modo sono sempre aggiornati, anche quando vengono aggiunti nuovi toni o stili da frontend -> la vista si aggiorna automaticamente grazie a Angular
  tones$ = this.aiService.tones$;
  styles$ = this.aiService.styles$;

  selectedTone: any;
  styles: any[] | undefined;
  selectedStyle: any;
  prompt: string = '';
  generate() {
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
    this.aiService.fetchTones();
    this.aiService.fetchStyles();
  }

  showDialog() {
    // Logica per mostrare il dialog
    console.log('Show dialog');
  }
}
