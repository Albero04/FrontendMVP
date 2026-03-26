import { Component } from '@angular/core';
import { DocSummary } from '../components/doc-summary/doc-summary';
import { ExtractedEmployeeInfo } from '../components/extracted-employee-info/extracted-employee-info';
import { ResultSplit } from '../shared/models/result-split.model';
@Component({
  selector: 'app-anteprima-documento',
  imports: [DocSummary, ExtractedEmployeeInfo],
  templateUrl: './anteprima-documento.html',
  styleUrl: './anteprima-documento.css',
})
export class AnteprimaDocumento {
  // todo ho idea che diventaerà un observable prima o poi...(quando cambi le pagine estratte fa ripartire l'analisi...)
  result = (history.state?.result as ResultSplit | null) ?? null;
  

  handleOpenOriginalPdf(): void {
    console.log('Apertura PDF originale');
  }

  handleOpenSplitPdf(): void {
    console.log('Apertura PDF diviso');
  }
}
