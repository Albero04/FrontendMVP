import { Component, Input } from '@angular/core';

@Component({
  selector: 'bb-status-pill',
  imports: [],
  templateUrl: './status-pill.html',
  styleUrl: './status-pill.css',
})
export class StatusPill {
  @Input() state: string ="";
}
