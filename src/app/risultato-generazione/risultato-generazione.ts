import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageTitle } from '../components/image-title/image-title';
import { FormsModule } from '@angular/forms';
import { Button } from '../components/button/button';
import { Editor } from '../components/editor/editor';
import { Prompt } from '../components/prompt/prompt';
import { Valutazione } from '../components/valutazione/valutazione';
import { Menutendina } from '../components/menutendina/menutendina';
import { Dialog } from '../components/dialog/dialog';

import { ResultAiAssistant } from '../shared/models/result-ai-assistant.model';
import { AiAssistantService } from '../../services/ai-assistant-service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-risultato-generazione',
  imports: [ImageTitle, FormsModule, Button, Prompt, Editor, Valutazione, Menutendina, CommonModule, Dialog],
  templateUrl: './risultato-generazione.html',
  styleUrl: './risultato-generazione.css',
})
export class RisultatoGenerazione {
  private aiService = inject(AiAssistantService);
  isEditable: boolean = false;
  readonly: boolean = true;
  private sub!: Subscription;
  localResult: ResultAiAssistant | null = null;

  ngOnInit() {
    this.sub = this.aiService.currentResult$.subscribe(serverResult => {
      if (serverResult) {
        this.localResult = { ...serverResult };//i ... fanno copia incolla di ogni proprietà dell'oggetto nel nuovo oggetto, ossia una copia per valore e non riferimento!
      }
    });
  }
  constructor() {
    const state = history.state;
    this.localResult = state?.result;
  }
  onRigenera(): void {
    console.log('Rigenerazione richiesta');
    // Qui puoi aggiungere la logica per rigenerare l'immagine, ad esempio chiamando un servizio
  }
  onSalva(): void {
    console.log('Salvataggio richiesto');
    // Qui puoi aggiungere la logica per salvare l'immagine, ad esempio scaricandola o inviandola a un server
  }
  deleteGeneration(): void {
    console.log('Scarto richiesto');
    // Qui puoi aggiungere la logica per scartare l'immagine, ad esempio resettando lo stato o navigando via
  }
  saveChanges(e:any){// e in realtà sarà un Result (bisogna emetterlo da immagine-titolo quando si cambia titolo o immagine)
    console.log('Salvataggio modifiche: comunicazione con AiAssistantServer ancora da fare', e);
  }
  onImageSelected(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.localResult!.imagePath = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  enableEditing(): void{
    this.isEditable = true;
    this.readonly = false;
  }
}
