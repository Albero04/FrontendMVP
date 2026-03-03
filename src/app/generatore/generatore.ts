import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
@Component({
  selector: 'app-generatore',
  imports: [FormsModule, FloatLabelModule, InputTextModule, SelectModule, ButtonModule, IftaLabelModule],
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
