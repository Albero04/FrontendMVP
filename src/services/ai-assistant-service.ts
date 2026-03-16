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

}
