import { ResultSplit } from "./result-split.model";
import { Result } from "./result.model";

export interface ResultAiCopilot extends Result {
    ResultSplit: ResultSplit[]; 
    name: string;
    company: Company;
    month_year: string; // o forse number
    category: string;  // sicuramente altro tipo
    pages: number;
    data: Date;
}


export enum Company { //provvisorio, per esempio
    Microsoft = 'Microsoft',
    Google = 'Google',
    Amazon = 'Amazon',
}