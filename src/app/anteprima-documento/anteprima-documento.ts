import { Component } from '@angular/core';
import { DocSummary } from '../components/doc-summary/doc-summary';
import { ExtractedEmployeeInfo } from '../components/extracted-employee-info/extracted-employee-info';
@Component({
  selector: 'app-anteprima-documento',
  imports: [DocSummary, ExtractedEmployeeInfo],
  templateUrl: './anteprima-documento.html',
  styleUrl: './anteprima-documento.css',
})
export class AnteprimaDocumento {

}
