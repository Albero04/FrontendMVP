import { Component } from '@angular/core';
import { ImmagineTitolo } from '../components/immagine-titolo/immagine-titolo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-risultato-generazione',
  imports: [ImmagineTitolo, FormsModule ],
  templateUrl: './risultato-generazione.html',
  styleUrl: './risultato-generazione.css',
})
export class RisultatoGenerazione {
imageTitle: string = 'Risultato della Generazione';
imagePath: string = 'PlaceHolder-GufoBagnato.jpg';
imageAltText: string = 'Immagine del risultato della generazione';
}
