import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Tables } from '../components/tables/tables';
import { Filters } from "../components/filters/filters";
import { MenuItem, MessageService } from 'primeng/api';
import { Button } from '../components/button/button';
import { Router } from '@angular/router';
import { AiAssistantService } from '../../services/ai-assistant-service/ai-assistant-service';
import { ResultAiAssistant } from '../shared/models/result-ai-assistant.model';

@Component({
  selector: 'app-storico-ai-assistant',
  imports: [FormsModule, Tables, Filters, Button],
  providers: [MessageService],
  templateUrl: './storico-ai-assistant.html',
  styleUrl: './storico-ai-assistant.css',
})
export class StoricoAiAssistant {
  private router = inject(Router);
  private aiService = inject(AiAssistantService);
  private destroyRef = inject(DestroyRef);

  ButtonLabel: string ='Aggiungi';
  Generazioni: ResultAiAssistant[] = [];
  GenerazioniFiltrate: ResultAiAssistant[] = [];
  items: MenuItem[] = [];
  dates: Date[] | undefined;
  tonoOptions: { name: string; code: string }[] = [];
  stileOptions: { name: string; code: string }[] = [];
  selectedTono: string | undefined; 
  selectedStile: string | undefined;
  searchvalue: string ='';
  columns = [
    { field: 'prompt', header: 'Prompt' },
    { field: 'tone', header: 'Tono' },
    { field: 'style', header: 'Stile' },
    { field: 'data', header: 'Data', type: 'date' },
    { field: 'content', header: 'Risultato parziale' }
  ];

  ngOnInit () {
    this.aiService.fetchTones();
    this.aiService.fetchStyles();

    this.aiService.tones$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((tones) => {
        this.tonoOptions = (tones ?? []).map(t => ({ name: t.name, code: t.code }));
      });

    this.aiService.styles$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((styles) => {
        this.stileOptions = (styles ?? []).map(s => ({ name: s.name, code: s.code }));
      });

    this.items = [
      {
        items: [
          { label: 'Duplica', icon: 'pi pi-pencil' },
          { label: 'Riutilizza', icon: 'pi pi-clone' },
          { label: 'Elimina', icon: 'pi pi-trash' }
        ]
      }
    ];

    this.Generazioni = this.aiService.getResultsHistory();
    this.GenerazioniFiltrate = [...this.Generazioni];
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
        g.prompt.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
        g.tone.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
        g.style.toLowerCase().includes(this.searchvalue.toLowerCase());

      const matchTono = !this.selectedTono || g.tone === this.selectedTono;
      const matchStile = !this.selectedStile || g.style === this.selectedStile;

      const matchDate =
        !this.dates ||
        this.dates.length !== 2 ||
        (new Date(g.data) >= this.dates[0] && new Date(g.data) <= this.dates[1]);

      return matchTono && matchStile && matchDate && matchSearch;
    });
  }
}