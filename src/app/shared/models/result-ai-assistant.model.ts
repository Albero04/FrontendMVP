import { Result } from './result.model';

export interface ResultAiAssistant extends Result {
	title: string;
	content: string;
	imagePath: string;
	tone: Tone;
	style: Style;
	data: Date;
	prompt: string;
	evaluation: number;
}

export enum Style {
	Concise = 'concise',
	Descriptive = 'descriptive',
	Technical = 'technical',
	Narrative = 'narrative',
	Creative = 'creative',
	Academic = 'academic'
}

export enum Tone {
	Formal = 'formal',
	Informal = 'informal',
	Friendly = 'friendly',
	Professional = 'professional',
	Persuasive = 'persuasive',
	Neutral = 'neutral'
}
