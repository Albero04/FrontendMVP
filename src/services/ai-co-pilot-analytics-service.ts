import { Injectable } from '@angular/core';
import { AnalyticsAbstractService } from './analytics-abstract-service'

@Injectable({
  providedIn: 'root',
})
export class AiCoPilotAnalyticsService extends AnalyticsAbstractService{
  getAnalysis(periodo: any): any[] {
    //chiamo il backend tramite post dando il periodo di tempo in input
    return [];
  }
}
