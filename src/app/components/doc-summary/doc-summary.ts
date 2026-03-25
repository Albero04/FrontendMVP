import { Component } from '@angular/core';
import { InputComponent } from '../input/input';
import { Button } from '../button/button';
import { StatusPill } from '../status-pill/status-pill';
@Component({
  selector: 'bb-doc-summary',
  imports: [InputComponent, Button, StatusPill],
  templateUrl: './doc-summary.html',
  styleUrl: './doc-summary.css',
})
export class DocSummary {
  state: string = 'Pronto';
  openOriginalPdf() {
    console.log('Prova apertura pdf originale');
  }

  openSplitPdf() {
    console.log('Prova apertura pdf diviso');
  }
}
