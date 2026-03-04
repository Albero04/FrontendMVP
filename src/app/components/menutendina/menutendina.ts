import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menutendina',
  imports: [FormsModule, SelectModule, IftaLabelModule, ButtonModule],
  templateUrl: './menutendina.html',
  styleUrl: './menutendina.css',
})
export class Menutendina {
@Input()  options: any[] | undefined;
@Input()  label: string='';
@Input()  selected: any;
@Input() placeholder: string = '';
@Output() selectedChange = new EventEmitter<any>();
}
