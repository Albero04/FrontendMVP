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
@Component({
  selector: 'app-tables',
  imports: [FormsModule, TableModule, ButtonModule, ToastModule, MenuModule, DatePipe, Filters, CommonModule],
  providers: [MessageService],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables {

@Input() RisultatoFiltrato: any[] = [];
@Input() columns: any[] = [];

items: MenuItem[] = [];

ngOnInit() {
  this.items = [
            {
                items: [
                    {
                        label: 'Duplica',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Riutilizza',
                        icon: 'pi pi-clone'
                    },
                    {   
                        label: 'Elimina',
                        icon: 'pi pi-trash'
                    }
                ]
            }
        ];
}
}
