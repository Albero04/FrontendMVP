import { inject, Injectable } from '@angular/core';
import { ResultAiCopilotSerializer } from '../app/shared/serializers/result-ai-copilot.serializer';
import { ResultAiCopilot } from '../app/shared/models/result-ai-copilot.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiCoPilotService {
  private serializer = inject(ResultAiCopilotSerializer);
  private resultSubject : BehaviorSubject<ResultAiCopilot | null> = new BehaviorSubject<ResultAiCopilot | null>(null);
  currentResult$ = this.resultSubject.asObservable();

  fetchCategories() : void {
    //todo implementare con chiamata al backend
  }

  fetchCompanies() : void {
    //todo implementare con chiamata al backend
  }

  fetchDepartments(idCompany: string) : void {
    //todo implementare con chiamata al backend
  }

  //todo modifica data di un result
  //todo modifica categoria di un result
  // todo modifica azienda di un result
  // todo modifica dipartimento di un result

}
