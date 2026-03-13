import { ResultAiCopilot } from '../models';
import { ResultSerializer } from './result.serializer';

export class ResultAiCopilotSerializer extends ResultSerializer<ResultAiCopilot> {
  serialize(payload: unknown[]): ResultAiCopilot {
    throw new Error('ResultAiCopilotSerializer.serialize not implemented yet');
  }

  deserialize(result: ResultAiCopilot): unknown[] {
    throw new Error('ResultAiCopilotSerializer.deserialize not implemented yet');
  }
}
