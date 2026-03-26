import { inject, Injectable } from '@angular/core';
import { ResultAiAssistant } from '../../app/shared/models/result-ai-assistant.model';
import { Tone } from '../../app/shared/models/result-ai-assistant.model';
import { Style } from '../../app/shared/models/result-ai-assistant.model';
import { ResultAiAssistantSerializer } from '../../app/shared/serializers/result-ai-assistant.serializer';
import { BehaviorSubject } from 'rxjs';
import { AnalyticsAbstractService } from '../analytics-abstract-service';
@Injectable({
  providedIn: 'root',
})
export class AiAssistantService {
  private serializer = inject(ResultAiAssistantSerializer);

  private resultSubject : BehaviorSubject<ResultAiAssistant | null> = new BehaviorSubject<ResultAiAssistant | null>(null);
  currentResult$ = this.resultSubject.asObservable();

  private tonesSubject = new BehaviorSubject<{ id: number; name: string }[]>([]);
  tones$ = this.tonesSubject.asObservable();

  private stylesSubject = new BehaviorSubject<{ id: number; name: string }[]>([]);
  styles$ = this.stylesSubject.asObservable();

  private companiesSubject = new BehaviorSubject<{ id: number; name: string }[]>([]);
  companies$ = this.companiesSubject.asObservable();

  // todo implementare con la vera chiamata al backend: string o id?
  fetchTonesByCompany(company: number) : void {
    const mockData = [
      { id: 1, name: 'Simpatico' },
      { id: 2, name: 'Formale' },
      { id: 3, name: 'Creativo' },
    ];
    this.tonesSubject.next(mockData);
  }
  
  // todo implementare con la vera chiamata al backendL: string o id?
  fetchStylesByCompany(company: number) : void {
    const mockData = [
      { id: 1, name: 'Conversazionale' },
      { id: 2, name: 'Essenziale' },
      { id: 3, name: 'Articolato' },
    ];
    this.stylesSubject.next(mockData);
  }

  fetchCompanies(): void {
    const mockCompanies = [
      { id: 1, name: 'default-company' },
      { id: 2, name: 'AlbertoSrl' },
      { id: 3, name: 'PiruzSrl' }
    ];
    this.companiesSubject.next(mockCompanies);
  }
  newTone(name: string, code: string) : void {
    //post al backend, se va a buon fine mi restituisce un id che metto nel mockTone
    const mockTone = { id: 1, name };//hardcodato id , da cambiare (todo)
    this.tonesSubject.next([...this.tonesSubject.value, mockTone]);
  }

  newStyle(name: string, code: string) : void {
    //post al backend
    const mockStyle = { id: 1, name };//hardcodato id , da cambiare (todo)
    this.stylesSubject.next([...this.stylesSubject.value, mockStyle]);
  }


  // todo implementare
  reuse(id: number) : void {}
  // todo implementare
  duplicate(id: number) : void {}
  // todo implementare
  removeGeneration(id: number) : void {}
  // todo implementare
  modifyImage(result: ResultAiAssistant, nuovoPathBase64: string): void {//obv manca la chiamata al backend, se va a buon fine aggiorna resultSubject
    const updated: ResultAiAssistant = {
      ...result,
      imagePath: nuovoPathBase64, // usa il nome proprietà corretto del tuo model
    };
    console.log('Ehi sto modificando l\'immagine wohoo');
    this.resultSubject.next(updated);
  }
  // todo implementare
  modifyContent(result: ResultAiAssistant, newContent: string) : void {
    // chiamata al backend (post)
    //se va a buon fine result si modifica result
    const newResult = { 
        ...result, 
        content: newContent 
    };
    this.resultSubject.next(newResult);
  }
  // todo implementare
  modifyTitle(result: ResultAiAssistant, newTitle: string) : void {
    // chiamata al backend (post)
    //se va a buon fine result si modifica result
    const newResult = { 
        ...result, 
        title: newTitle 
    };
    this.resultSubject.next(newResult);
  }

  // todo implementare chiamata al backend
  requireGeneration(prompt: string, tono: string, stile: string) : number {
    const pendingResult: ResultAiAssistant = {
        id: -1, // id temporaneo, sarà aggiornato una volta ricevuto il risultato dal backend
        title: '',
        content: '',
        imagePath: '',
        tone: tono,
        style: stile,
        data: new Date(),
        prompt: prompt,
        evaluation: -1
    };

    this.resultSubject.next(pendingResult);

    //chiamata al backend
    return 0;
  }
  // todo implementare
  getGeneration(jobid: number) : void {}


  getResultsHistory(): ResultAiAssistant[] {
    // chiamata al backend per ottenere la lista delle generazioni passate
    // per ora mocko i dati
    const mockData: ResultAiAssistant[] = [
      {
        id: 1,
        title: 'Generazione 1',
        // provo a vedere se il truncate va, metto un content luuuuuuuuuuuuuuuuuuuuuuungo
        content: 'Contenuto della generazione 1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        imagePath: 'path/to/image1.jpg',
        tone: 'Simpatico',
        style: 'Creativo',
        data: new Date('2024-09-11'),
        prompt: 'Prompt della generazione 1',
        evaluation: 4
      },
      {
        id: 2,
        title: 'Generazione 2',
        content: 'Contenuto della generazione 2',
        imagePath: 'path/to/image2.jpg',
        tone: 'Formale',
        style: 'Essenziale',
        data: new Date('2024-09-12'),
        prompt: 'Prompt della generazione 2',
        evaluation: 5
      }
    ];

    return mockData;
  }

}
