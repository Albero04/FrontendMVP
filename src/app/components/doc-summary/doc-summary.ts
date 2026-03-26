import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input';
import { Button } from '../button/button';
import { StatusPill } from '../status-pill/status-pill';
import { Result } from '../../shared/models/result.model';
import { ResultSplit } from '../../shared/models/result-split.model';
@Component({
  selector: 'bb-doc-summary',
  imports: [InputComponent, Button, StatusPill],
  templateUrl: './doc-summary.html',
  styleUrl: './doc-summary.css',
})
export class DocSummary {
  @Input() result: ResultSplit | null = null;
  state: string = 'Pronto';

  openOriginalPdf() {
    console.log('Prova apertura pdf originale');
  }

  openSplitPdf() {
    console.log('Prova apertura pdf diviso');
  }
}
