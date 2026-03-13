import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-tables',
  imports: [FormsModule,TableModule,ButtonModule,ToastModule,MenuModule, DatePipe],
  providers: [MessageService],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables {
Generazioni: any[] = [];
items: MenuItem[] | undefined;

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
  this.Generazioni = [
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Formale', Stile: 'Accademico', Data: new Date('2024, 9, 11'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2024, 2, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2026, 5, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 12, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: 'Simpatico', Stile: 'Articolato', Data: new Date('2023, 4, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' }
  ];
}
}
