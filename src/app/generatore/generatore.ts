import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Menutendina } from '../components/menutendina/menutendina';
import { Prompt } from '../components/prompt/prompt';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
@Component({
  selector: 'app-generatore',
  imports: [FormsModule, Prompt, Menutendina, ButtonModule],
  templateUrl: './generatore.html',
  styleUrl: './generatore.css',
})
export class Generatore {
  private router = inject(Router);
  tones: any[] | undefined;
  selectedTone: any;
  styles: any[] | undefined;
  selectedStyle: any;
  prompt: string = '';
  NavigateToRisultatoGenerazione() {
    // Passa prompt, tono e stile come stato di navigazione
    // in RisultatoGenerazione vengono letti via history.state
    this.router.navigate(['/risultato-generazione'], {
      state: {
        prompt: this.prompt,
        tono: this.selectedTone,
        stile: this.selectedStyle
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
