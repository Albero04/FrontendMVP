import {Result} from "./result.model";

export interface ResultSplit extends Result {
    confidence: number;
    recipient: string;
    state: string;
    time_Analysis: number;
    finalPage: number;
    number_pages: number;
}
    