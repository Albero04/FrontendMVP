import { inject, Injectable } from '@angular/core';

import { ResultAiCopilotSerializer } from '../../app/shared/serializers/result-ai-copilot.serializer';
import { ResultAiCopilot } from '../../app/shared/models/result-ai-copilot.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiCoPilotService {
  private serializer = inject(ResultAiCopilotSerializer);
  private resultSubject : BehaviorSubject<ResultAiCopilot | null> = new BehaviorSubject<ResultAiCopilot | null>(null);
  currentResult$ = this.resultSubject.asObservable();

  private templatesSubject = new BehaviorSubject<{ name: string; content: string }[]>([]);
  templates$ = this.templatesSubject.asObservable();

  newTemplate(name: string, content: string): void{
    //post al backend
    const mockStyle = { name, content };
    //aggiungi all'array stylesSubject il nuovo stile (in un caso reale, dopo aver ricevuto conferma dal backend)
    this.templatesSubject.next([...this.templatesSubject.value, mockStyle]);

  }

  fetchTemplates() : void {
    const mockData = [
      { name: 'Template 1', content: 'Descrizione del template 1' },
      { name: 'Template 2', content: 'Descrizione del template 2' },
      { name: 'Template 3', content: 'Descrizione del template 3' },
      { name: 'Template 4', content: 'Descrizione del template 4' },
      { name: 'Template 5', content: 'Descrizione del template 5' },
      { name: 'Template 6', content: 'Descrizione del template 6' },
    ];
    this.templatesSubject.next(mockData);
     
  }
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
