import { inject, Injectable } from '@angular/core';
import { Result } from '../app/shared/models/result.model';
import { ResultAiAssistant } from '../app/shared/models/result-ai-assistant.model';
import { ResultAiAssistantSerializer } from '../app/shared/serializers/result-ai-assistant.serializer';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AiAssistantService {
  private serializer = inject(ResultAiAssistantSerializer);

  private resultSubject : BehaviorSubject<ResultAiAssistant | null> = new BehaviorSubject<ResultAiAssistant | null>(null);
  currentResult$ = this.resultSubject.asObservable();

  // todo implementare 
  getToni() : string[] {
    return [];
  }
  // todo implementare
  getStili() : string[] {
    return [];
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
  // todo implementare
  requireGeneration(prompt: string, tono: string, stile: string) : number {
    return 0;
  }
  // todo implementare
  getGeneration(jobid: number) : void {}






}
