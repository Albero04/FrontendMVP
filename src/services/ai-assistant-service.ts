import { inject, Injectable } from '@angular/core';
import { ResultAiAssistant } from '../app/shared/models/result-ai-assistant.model';
import { Tone } from '../app/shared/models/result-ai-assistant.model';
import { Style } from '../app/shared/models/result-ai-assistant.model';
import { ResultAiAssistantSerializer } from '../app/shared/serializers/result-ai-assistant.serializer';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AiAssistantService {
  private serializer = inject(ResultAiAssistantSerializer);

  private resultSubject : BehaviorSubject<ResultAiAssistant | null> = new BehaviorSubject<ResultAiAssistant | null>(null);
  currentResult$ = this.resultSubject.asObservable();

  // todo implementare con la vera chiamata al backend
  getToni() : { name: string; code: string }[] {
    return [
      { name: 'Simpatico', code: 'simpatico' },
      { name: 'Formale', code: 'formale' },
      { name: 'Creativo', code: 'creativo' },
    ];
  }
  // todo implementare con la vera chiamata al backend
  getStili() : { name: string; code: string }[] {
     return [
      { name: 'Conversazionale', code: 'conversazionale' },
      { name: 'Essenziale', code: 'essenziale' },
      { name: 'Articolato', code: 'articolato' },
    ];
  }
  // todo implementare
  reuse(id: number) : void {}
  // todo implementare
  duplicate(id: number) : void {}
  // todo implementare
  removeGeneration(id: number) : void {}
  // todo implementare
  modifyImage(result: ResultAiAssistant, newImagePath: string) : void {}
  // todo implementare
  modifyContent(result: ResultAiAssistant, newContent: string) : void {}
  // todo implementare
  modifyTitle(result: ResultAiAssistant, newTitle: string) : void {}

  // todo implementare chiamata al backend
  requireGeneration(prompt: string, tono: string, stile: string) : number {
    const pendingResult: ResultAiAssistant = {
        id: -1, // id temporaneo, sarà aggiornato una volta ricevuto il risultato dal backend
        title: '',
        content: '',
        imagePath: '',
        tone: tono as Tone,
        style: stile as Style,
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






}
