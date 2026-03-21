import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Button } from '../button/button';
import { AiAssistantService } from '../../../services/ai-assistant-service/ai-assistant-service';
import { AiCoPilotService } from '../../../services/ai-co-pilot-service/ai-co-pilot-service';

export type AddDialogType = 'tone' | 'style' | 'template';

@Component({
  selector: 'app-add-dialog',
  imports: [CommonModule, FormsModule, DialogModule, Button],
  templateUrl: './add-dialog.html',
  styleUrl: './add-dialog.css',
})
export class AddDialog {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() type: AddDialogType = 'tone';

  name: string = '';
  description: string = '';
  submitted: boolean = false;

  private aiAssistantService = inject(AiAssistantService);
  private aiCoPilotService = inject(AiCoPilotService);
  get dialogTitle(): string {
    return this.type === 'tone' ? 'Aggiungi un tono' : this.type === 'style' ? 'Aggiungi uno stile' : 'Aggiungi un template';
  }

  get saveLabel(): string {
    return this.type === 'tone' ? 'Salva tono' : this.type === 'style' ? 'Salva stile' : 'Salva template';
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.resetForm();
  }

  save(): void {
    this.submitted = true;

    const normalizedName = this.name.trim();
    if (!normalizedName) {
      return;
    }

    const normalizedDescription = this.description.trim() || normalizedName;

    if (this.type === 'tone') {
      this.aiAssistantService.newTone(normalizedName, normalizedDescription);
    } else if(this.type ==='style') {
      this.aiAssistantService.newStyle(normalizedName, normalizedDescription);
    }else{
      this.aiCoPilotService.newTemplate(normalizedName, normalizedDescription)
    }

    this.close();
  }

  private resetForm(): void {
    this.name = '';
    this.description = '';
    this.submitted = false;
  }
}
