import { Result } from "./result.model";

export interface ResultAiCopilot extends Result {
    ResultSplit: string; //Per adesso è string poi sarà un ResultSplit[]
    name: string;
    company: Company;
    month_year: string; // o forse number
    category: string;  // sicuramente altro tipo
    pages: number;
    data: Date;
}


enum Company { //provvisorio, per esempio
    Microsoft = 'Microsoft',
    Google = 'Google',
    Amazon = 'Amazon',
}