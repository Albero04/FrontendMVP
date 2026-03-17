import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { Filters } from "../filters/filters";
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag'
@Component({
  selector: 'app-tables',
  imports: [FormsModule, TableModule, ButtonModule, ToastModule, MenuModule, DatePipe, Filters, CommonModule, TagModule],
  providers: [MessageService],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables {

@Input() RisultatoFiltrato: any[] = [];
@Input() columns: any[] = [];
@Input() items: MenuItem[] = [];

getSeverity(status: any): any {
  switch (status.toLowerCase()) {
    case 'pronto':
      return 'info';
    case 'inviato':
      return 'success'
    case 'da validare':
      return 'warning';
    case 'Errore':
      return 'danger';
    default:
      return 'secondary';
  }
}
}
