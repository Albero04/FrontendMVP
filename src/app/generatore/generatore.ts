import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Menutendina } from '../components/menutendina/menutendina';
import { Prompt } from '../components/prompt/prompt';
@Component({
  selector: 'app-generatore',
  imports: [FormsModule, Prompt, Menutendina, ButtonModule],
  templateUrl: './generatore.html',
  styleUrl: './generatore.css',
})
export class Generatore {
  tones: any[] | undefined;
  selectedTone: any;
  styles: any[] | undefined;
  selectedStyle: any;
  prompt: string = '';
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
