import { Component, OnInit, inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, NgStyle, NgClass } from '@angular/common';
import { AnalyticsCharts } from '../components/analytics-charts/analytics-charts';
import { AccordionModule } from 'primeng/accordion'
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [AnalyticsCharts, AccordionModule, CardModule, NgStyle, NgClass],
  templateUrl: './analytics-dashboard.html',
  styleUrls: ['./analytics-dashboard.css'],
})
export class AnalyticsDashboard {
kpis = [
  { label: 'N. PROMPT GENERATI', value: 145 },
  { label: 'RATING MEDIO PROMPT', value: 1.7 },
  { label: 'N. RIGENERAZIONI MEDIE PER PROMPT', value: 0.4 }
];
}