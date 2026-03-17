import { Component, inject, signal, effect } from '@angular/core';
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

  // Variabili per tenere traccia delle modifiche in sospeso, per evitare di fare chiamata backend senza reali modifiche
  private pendingImagePath: string | null = null;
  private pendingTitle: string | null = null;
  private pendingContent: string | null = null;

  private initialResult = (history.state?.result as ResultAiAssistant | null) ?? null;

  private serviceResult = toSignal(
    this.aiService.currentResult$.pipe(map(r => (r ? { ...r } : null))),
    { initialValue: this.initialResult }
  );

  localResult = signal<ResultAiAssistant | null>(this.initialResult);

  constructor() { //cosa particolare che permette di sincronizzare il localResult con serviceResult
    effect(() => {
      const r = this.serviceResult();
      if (r) {
        this.localResult.set({ ...r });
      } else {
        this.localResult.set(null);
      }
    });
  }

  onRigenera(): void {
    console.log('Rigenerazione richiesta');
  }
  onSalva(): void {
    console.log('Salvataggio richiesto');
  }
  deleteGeneration(): void {
    console.log('Scarto richiesto');
  }
  saveChanges(): void {
    const current = this.localResult();
    if (!current) return;

    if (this.pendingImagePath !== null) {
      this.aiService.modifyImage(current, this.pendingImagePath);
      this.pendingImagePath =null;
    }

    if (this.pendingTitle !== null) {
      this.aiService.modifyTitle(current, this.pendingTitle);
      this.pendingTitle =null;
    }
    if (this.pendingContent !== null) {
      this.aiService.modifyContent(current, this.pendingContent);
      this.pendingContent =null;
    }
  }
  changeImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const nuovoPathBase64 = reader.result as string;
      const current = this.localResult();
      if (!current) return;

      this.pendingImagePath = nuovoPathBase64;

      this.localResult.set({
        ...current,
        imagePath: nuovoPathBase64,
      });
    };
    reader.readAsDataURL(file);
  }
  enableEditing(): void{
    this.isEditable = true;
    this.readonly = false;
  }
}
