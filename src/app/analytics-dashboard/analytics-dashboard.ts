import { Component, OnInit, inject, PLATFORM_ID, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { isPlatformBrowser, NgStyle, NgClass } from '@angular/common';
import { AnalyticsCharts } from '../components/analytics-charts/analytics-charts';
import { AccordionModule } from 'primeng/accordion'
import { CardModule } from 'primeng/card'

import { FormsModule } from '@angular/forms';


import { DateRangePicker } from '../components/date-range-picker/date-range-picker';

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [AnalyticsCharts, AccordionModule, CardModule, NgStyle, NgClass,FormsModule, DateRangePicker],
  templateUrl: './analytics-dashboard.html',
  styleUrls: ['./analytics-dashboard.css'],
})
export class AnalyticsDashboard {
  
  
  periodoOptions = [
    { name: 'Sempre' },
    { name: 'Questo mese' },
    { name: 'Ultime 2 settimane' },
    { name: 'Ultimi 3 mesi' },
    { name: 'Ultimo anno' },
  ];

AiAssistantData = [
  { label: 'N. PROMPT GENERATI', value: 145 },
  { label: 'RATING MEDIO PROMPT', value: 1.7 },
  { label: 'N. RIGENERAZIONI MEDIE PER PROMPT', value: 0.4 }
];
AiCoPilotData = [
  { label: 'PERCENTUALE CONFIDENZA MEDIA', value: 71+"%" },
  { label: 'PERCENTUALE HUMAN-IN-THE-LOOP', value: 2+"%" },
  { label: 'ACCURATEZZA MAPPING', value: 56+"%" },
  { label: 'TEMPI MEDI ANALISI', value: 7+"s" }
]
onAiAssistantRangeChange(dates: Date[] | undefined) {
    console.log('Nuovo intervallo di date per AI Assistant:', dates);
    // Qui puoi aggiungere la logica per filtrare i dati in base alle date selezionate
  }
onAiCoPilotRangeChange(dates: Date[] | undefined) {
    console.log('Nuovo intervallo di date per AI Co-Pilot:', dates);
    // Qui puoi aggiungere la logica per filtrare i dati in base alle date selezionate
  }
}