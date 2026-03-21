import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Menutendina } from '../components/menutendina/menutendina';
import { Button } from '../components/button/button';
import { Prompt } from '../components/prompt/prompt';
import { AddDialog, AddDialogType } from '../components/add-dialog/add-dialog';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

//servizi
import { AiAssistantService } from '../../services/ai-assistant-service';


// da togliere
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SendDocumentDialog } from '../components/send-document-dialog/send-document-dialog';
import { ToastModule } from 'primeng/toast';
import { AiCoPilotService } from '../../services/ai-co-pilot-service';

@Component({
  selector: 'app-generatore',
  imports: [FormsModule, Prompt, Menutendina, ButtonModule, Button, AsyncPipe, AddDialog, ToastModule],
  templateUrl: './generatore.html',
  providers: [DialogService,MessageService],
  styleUrl: './generatore.css',
})
export class Generatore {
  private router = inject(Router);
  private aiService = inject(AiAssistantService);

  // in questo modo sono sempre aggiornati, anche quando vengono aggiunti nuovi toni o stili da frontend -> la vista si aggiorna automaticamente grazie a Angular
  tones$ = this.aiService.tones$;
  styles$ = this.aiService.styles$;

  selectedTone: any;
  selectedStyle: any;
  prompt: string = '';
  addDialogVisible: boolean = false;
  addDialogType: AddDialogType = 'tone';

  //tutto ciò che c'è qui lo toglierò
  private aiServiceCoPilotDaTogliere = inject(AiCoPilotService);
  templates$ = this.aiServiceCoPilotDaTogliere.templates$;
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

    this.aiServiceCoPilotDaTogliere.fetchTemplates();
  }

  openAddDialog(type: AddDialogType): void {
    this.addDialogType = type;
    this.addDialogVisible = true;
  }

  //tutto ciò che metto qui sotto andrà tolto e spostato nel componente giusto
  dialogService = inject(DialogService);
  messageService = inject(MessageService);
  ref: DynamicDialogRef | null = null;
  showDialog() {
     this.ref = this.dialogService.open(SendDocumentDialog, {
            header: 'Aggiungi un messaggio',
            width: '50%',
            height: '50%',
            contentStyle: { "overflow": "auto" },
            closable: true,
            autoZIndex: true,
            data: {
              templates$: this.templates$ 
            }
        });

    if (this.ref) {
      this.ref.onClose.subscribe((nomeTemplate: any) =>{
          if (nomeTemplate) {
              console.log("template selezionato: ", nomeTemplate);
              this.messageService.add({severity:'info', summary: 'Invio programmato', detail: nomeTemplate});
          }
      });
    }
  }

  
}
