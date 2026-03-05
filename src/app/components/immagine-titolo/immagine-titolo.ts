import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-immagine-titolo',
  imports: [ImageModule, FormsModule, InputTextModule],
  templateUrl: './immagine-titolo.html',
  styleUrl: './immagine-titolo.css',
})
export class ImmagineTitolo {
@Input() imageUrl: string = '';
@Input() caption: string = '';
@Input() altText: string = '';
@Input() set imageTitle(value: string) {
  this._imageTitle = value;
}
_imageTitle: string = '';
@Output() imageTitleChange = new EventEmitter<string>();

onTitleChange(value: string): void {
  this._imageTitle = value;
  this.imageTitleChange.emit(value);
}
}
