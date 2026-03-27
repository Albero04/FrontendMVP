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

export interface Style {
	id: number;
	name: string;
}

export interface Tone {
	id: number;
	name: string;
}

export interface Company {
	id: number;
	name: string;
}
