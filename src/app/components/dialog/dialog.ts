import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-dialog',
  imports: [Button, FormsModule, ConfirmDialogModule, ToastModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);

    onDiscard(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Vuoi cancellare questa generazione? Questa azione non è reversibile.',
            header: 'Attenzione',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Annulla',
            rejectButtonProps: {
                label: 'Annulla',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Elimina',
                severity: 'danger'
            },
        
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confermato', detail: 'Generazione eliminata con successo' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Annullato', detail: 'Generazione non eliminata' });
            }
        });
    }
}
