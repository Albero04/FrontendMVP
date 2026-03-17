import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageTitle } from '../components/image-title/image-title';
import { FormsModule } from '@angular/forms';
import { Button } from '../components/button/button';
import { Editor } from '../components/editor/editor';
import { Prompt } from '../components/prompt/prompt';
import { Valutazione } from '../components/valutazione/valutazione';
import { Menutendina } from '../components/menutendina/menutendina';
import { Dialog } from '../components/dialog/dialog';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { ResultAiAssistant } from '../shared/models/result-ai-assistant.model';
import { AiAssistantService } from '../../services/ai-assistant-service';

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

  private initialResult = (history.state?.result as ResultAiAssistant | null) ?? null;

  localResult = toSignal(
    this.aiService.currentResult$.pipe(map(r => (r ? { ...r } : null))),
    { initialValue: this.initialResult }
  );


  onRigenera(): void {
    console.log('Rigenerazione richiesta');
  }
  onSalva(): void {
    console.log('Salvataggio richiesto');
  }
  deleteGeneration(): void {
    console.log('Scarto richiesto');
  }
  saveChanges(e: any): void {
    console.log('Salvataggio modifiche: comunicazione con AiAssistantServer ancora da fare', e);
  }
  changeImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const nuovoPathBase64 = reader.result as string;
      const current = this.localResult();

      if (current) {
        this.aiService.modifyImage(current, nuovoPathBase64);
      }
    };
    reader.readAsDataURL(file);
  }
  enableEditing(): void{
    this.isEditable = true;
    this.readonly = false;
  }
}
