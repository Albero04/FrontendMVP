import { Component } from '@angular/core';
import { ImmagineTitolo } from '../components/immagine-titolo/immagine-titolo';
import { FormsModule } from '@angular/forms';
import { Button } from '../components/button/button';
import { Prompt } from '../components/prompt/prompt';
@Component({
  selector: 'app-risultato-generazione',
  imports: [ImmagineTitolo, FormsModule, Button, Prompt],
  templateUrl: './risultato-generazione.html',
  styleUrl: './risultato-generazione.css',
})
export class RisultatoGenerazione {
imageTitle: string = 'Risultato della Generazione';
imagePath: string = 'PlaceHolder-GufoBagnato.jpg';
imageAltText: string = 'Immagine del risultato della generazione';
testoGenerato: string = 'Questo è il testo generato.';
onRigenera(): void {
  console.log('Rigenerazione richiesta');
  // Qui puoi aggiungere la logica per rigenerare l'immagine, ad esempio chiamando un servizio
}
onSalva(): void {
  console.log('Salvataggio richiesto');
  // Qui puoi aggiungere la logica per salvare l'immagine, ad esempio scaricandola o inviandola a un server
}
onDiscard(): void {
  console.log('Scarto richiesto');
  // Qui puoi aggiungere la logica per scartare l'immagine, ad esempio resettando lo stato o navigando via
}
}
