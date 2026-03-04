import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-prompt',
  imports: [FormsModule, FloatLabelModule, TextareaModule],
  templateUrl: './prompt.html',
  styleUrl: './prompt.css',
})
export class Prompt {
@Input()  prompt: string = '';
@Output() promptChange = new EventEmitter<string>();
}
