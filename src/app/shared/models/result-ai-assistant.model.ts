import { Result } from './result.model';

export interface ResultAiAssistant extends Result {
	title: string;
	content: string;
	imagePath: string;
	tone: Tone["name"];
	style: Style["name"];
	data: Date;
	prompt: string;
	evaluation: number;
}

export interface Style {
	name: string;
	code: string;
}

export interface Tone {
	name: string;
	code: string;
}
