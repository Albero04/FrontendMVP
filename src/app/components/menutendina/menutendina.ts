import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { Button } from '../button/button';

@Component({
  selector: 'menutendina',
  imports: [CommonModule, FormsModule, SelectModule, IftaLabelModule, ButtonModule, Button],
  templateUrl: './menutendina.html',
  styleUrl: './menutendina.css',
})
export class Menutendina {
  @Input() options: any[] | null | undefined;
  @Input() label: string='';
  @Input() selected: any;
  @Input() placeholder: string = '';
  @Input() addButtonLabel: string = 'Nuovo';
  @Input() showAddNew: boolean = true;
  @Input() disabled: boolean = false;   /** Rende la select parametrica per usarla in più pagine */
  @Output() selectedChange = new EventEmitter<any>();
  @Output() addNew = new EventEmitter<void>();

  removeOption(option: any, event: Event) {
    event.stopPropagation(); // evita selezione dell'item

    if (!this.options) return;

    this.options = this.options.filter(o => o !== option);

    // Se l'opzione eliminata era selezionata, la deseleziono
    if (this.selected === option) {
      this.selected = null;
      this.selectedChange.emit(null);
    }
  }

  emitAddNew(): void {
    this.addNew.emit();
  }
}
