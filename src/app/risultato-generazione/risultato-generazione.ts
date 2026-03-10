import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmagineTitolo } from '../components/immagine-titolo/immagine-titolo';
import { FormsModule } from '@angular/forms';
import { Button } from '../components/button/button';
import { Editor } from '../components/editor/editor';
import { Prompt } from '../components/prompt/prompt';
import { Valutazione } from '../components/valutazione/valutazione';
import { Menutendina } from '../components/menutendina/menutendina';
import { Dialog } from '../components/dialog/dialog';
@Component({
  selector: 'app-risultato-generazione',
  imports: [ImmagineTitolo, FormsModule, Button, Prompt, Editor, Valutazione, Menutendina, CommonModule, Dialog],
  templateUrl: './risultato-generazione.html',
  styleUrl: './risultato-generazione.css',
})
export class RisultatoGenerazione {
imageTitle: string = 'Risultato della Generazione';
imagePath: string = 'PlaceHolder-GufoBagnato.jpg';
imageAltText: string = 'Immagine del risultato della generazione';
testoGenerato: string = 'Questo è il testo generato.';
valutazione: number = 0;
readonly: boolean = true;

// Parametri ricevuti dalla pagina Generatore tramite lo stato di navigazione (history.state)
promptInserito: string = '';
tonoSelezionato: any = null;
stileSelezionato: any = null;

constructor() {
  // history.state contiene i dati passati da generatore via router.navigate({ state: {...} })
  const state = history.state;
  this.promptInserito  = state?.prompt ?? '';
  this.tonoSelezionato  = state?.tono   ?? null;
  this.stileSelezionato = state?.stile  ?? null;
}
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
onModifica(): void{
  console.log('Modifica richiesta');
  this.readonly = false;
  // Qua si andrà alla pagina di modifica
}
}
