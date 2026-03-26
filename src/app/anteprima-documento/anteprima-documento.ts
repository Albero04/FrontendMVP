import { Component, inject} from '@angular/core';
import { DocSummary } from '../components/doc-summary/doc-summary';
import { ExtractedEmployeeInfo } from '../components/extracted-employee-info/extracted-employee-info';
import { ResultSplit } from '../shared/models/result-split.model';
import { Button } from '../components/button/button';
// da togliere
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { SendDocumentDialog,SendDocumentData } from '../components/send-document-dialog/send-document-dialog';
import { ToastModule } from 'primeng/toast';
import { AiCoPilotService } from '../../services/ai-co-pilot-service/ai-co-pilot-service';

@Component({
  selector: 'app-anteprima-documento',
  imports: [DocSummary, ExtractedEmployeeInfo, Button, ToastModule],
  providers: [DialogService,MessageService],
  templateUrl: './anteprima-documento.html',
  styleUrl: './anteprima-documento.css',
})
export class AnteprimaDocumento {
  // todo ho idea che diventaerà un observable prima o poi...(quando cambi le pagine estratte fa ripartire l'analisi...)
  result = (history.state?.result as ResultSplit | null) ?? null;
  
  ngOnInit() {
    this.aiServiceCoPilotDaTogliere.fetchTemplates();
  }
  handleOpenOriginalPdf(): void {
    console.log('Apertura PDF originale');
  }

  handleOpenSplitPdf(): void {
    console.log('Apertura PDF diviso');
  }

  dialogService = inject(DialogService);
  messageService = inject(MessageService);
  ref: DynamicDialogRef | null = null;

  private aiServiceCoPilotDaTogliere = inject(AiCoPilotService);
  templates$ = this.aiServiceCoPilotDaTogliere.templates$;
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
      this.ref.onClose.subscribe((result: SendDocumentData) =>{
          if (result) {
         
              console.log(result.messaggio);
              console.log(result.orarioInvio.name);
              console.log(result.fileAttachments); // Array di File
              if (result.orarioInvio.value === 'now') {
                this.messageService.add({severity:'info', summary: 'Invio in corso'});
              } else 
                this.messageService.add({severity:'info', summary: 'Invio programmato', detail: result.orarioInvio.name });
          }

      });
    }
  }
}
