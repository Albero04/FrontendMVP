import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { Filters } from "../filters/filters";
@Component({
  selector: 'app-tables',
  imports: [FormsModule, TableModule, ButtonModule, ToastModule, MenuModule, DatePipe, Filters],
  providers: [MessageService],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables {
@Input() Generazioni: any[] = [];
@Input() GenerazioniFiltrate: any[] = [];
@Input() items: MenuItem[] | undefined;
@Input() dates: Date[] | undefined;
@Input() tonoOptions: string[]= [];
@Input() selectedTono: string | undefined;
@Input() stileOptions: string[]= [];
@Input() selectedStile: string | undefined;
@Input() searchvalue: string ='';

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
