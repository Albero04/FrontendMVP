import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class AnalyticsAbstractService {
  abstract getAnalysis(periodo: any): any[];
}
