import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tables } from '../components/tables/tables';
import { Filters } from "../components/filters/filters";
import { MenuItem, MessageService } from 'primeng/api';
import { Button } from '../components/button/button';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-storico-ai-assistant',
  imports: [FormsModule, Tables, Filters, Button],
  providers: [MessageService],
  templateUrl: './storico-ai-assistant.html',
  styleUrl: './storico-ai-assistant.css',
})
export class StoricoAiAssistant {
private router = inject(Router);
ButtonLabel: string ='Aggiungi';
Generazioni: any[] = [];
GenerazioniFiltrate: any[] = [];
items: MenuItem[] = [];
dates: Date[] | undefined;
tonoOptions: string[] = ['Formale', 'Informale', 'Simpatico', 'Serio'];
stileOptions: string[] = ['Accademico', 'Articolato', 'Conciso', 'Esplicativo'];
selectedTono: string | undefined; 
selectedStile: string | undefined;
searchvalue: string ='';
columns = [
  { field: 'Prompt', header: 'Prompt' },
  { field: 'Tono', header: 'Tono' },
  { field: 'Stile', header: 'Stile' },
  { field: 'Data', header: 'Data', type: 'date' }
];

 ngOnInit () {
    this.items = [
            {
                items: [
                    {
                        label: 'Duplica',
                        icon: 'pi pi-pencil',
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
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[0], Stile: this.stileOptions[0], Data: new Date('2024, 9, 11'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[2], Stile: this.stileOptions[1], Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[2], Stile: this.stileOptions[1], Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[2], Stile: this.stileOptions[2], Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[2], Stile: this.stileOptions[1], Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[1], Stile: this.stileOptions[1], Data: new Date('2023, 11, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[2], Stile: this.stileOptions[1], Data: new Date('2024, 2, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[3], Stile: this.stileOptions[3], Data: new Date('2026, 5, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[2], Stile: this.stileOptions[1], Data: new Date('2023, 12, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' },
    { Prompt: 'Lorem ipsum dolor sit amet', Tono: this.tonoOptions[3], Stile: this.stileOptions[1], Data: new Date('2023, 4, 12'), RisultatoParziale: 'Lorem ipsum dolor sit amet' }
  ];
  this.GenerazioniFiltrate = this.Generazioni;
}

NavigateToGeneratore(){
 this.router.navigate(['/generatore']);
}

onSearchChange(value:string){
  this.searchvalue = value;
  this.applyFilters();
}

onDateChange(dates: Date[]) {
  this.dates = dates;
  this.applyFilters();
}
onTonoChange(tono: string | undefined) {
  this.selectedTono = tono;
  this.applyFilters();
}
onStileChange(stile: string | undefined) {
  this.selectedStile = stile;
  this.applyFilters();
}
applyFilters() {

this.GenerazioniFiltrate = this.Generazioni.filter(g => {

const matchSearch =
!this.searchvalue ||
g.Prompt.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
g.Tono.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
g.Stile.toLowerCase().includes(this.searchvalue.toLowerCase());

const matchTono = !this.selectedTono || g.Tono === this.selectedTono;

const matchStile = !this.selectedStile || g.Stile === this.selectedStile;

const matchDate =
!this.dates ||
this.dates.length !== 2 ||
(new Date(g.Data) >= this.dates[0] && new Date(g.Data) <= this.dates[1]);

return matchTono && matchStile && matchDate && matchSearch;

});

}
}