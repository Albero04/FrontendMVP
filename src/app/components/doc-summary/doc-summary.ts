import { Component, Input, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../input/input';
import { Button } from '../button/button';
import { StatusPill } from '../status-pill/status-pill';
import { ResultSplit } from '../../shared/models/result-split.model';
import { PageRangeInput } from '../page-range-input/page-range-input';
@Component({
  selector: 'bb-doc-summary',
  imports: [InputComponent, Button, StatusPill, PageRangeInput],
  templateUrl: './doc-summary.html',
  styleUrl: './doc-summary.css',
})
export class DocSummary {
  @Input() result: ResultSplit | null = null;
  @Output() openOriginalPdf = new EventEmitter<void>();
  @Output() openSplitPdf = new EventEmitter<void>();
  state: string = 'Pronto';


}
