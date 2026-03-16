import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageTitle } from '../components/image-title/image-title';
import { FormsModule } from '@angular/forms';
import { Button } from '../components/button/button';
import { Editor } from '../components/editor/editor';
import { Prompt } from '../components/prompt/prompt';
import { Valutazione } from '../components/valutazione/valutazione';
import { Menutendina } from '../components/menutendina/menutendina';
import { Dialog } from '../components/dialog/dialog';
@Component({
  selector: 'app-risultato-generazione',
  imports: [ImageTitle, FormsModule, Button, Prompt, Editor, Valutazione, Menutendina, CommonModule, Dialog],
  templateUrl: './risultato-generazione.html',
  styleUrl: './risultato-generazione.css',
})
export class RisultatoGenerazione {
isEditable: boolean = false;
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
  this.promptInserito  = state?.result.prompt ?? '';
  this.tonoSelezionato  = state?.result.tone   ?? null;
  this.stileSelezionato = state?.result.style  ?? null;
}
onRigenera(): void {
  console.log('Rigenerazione richiesta');
  // Qui puoi aggiungere la logica per rigenerare l'immagine, ad esempio chiamando un servizio
}
onSalva(): void {
  console.log('Salvataggio richiesto');
  // Qui puoi aggiungere la logica per salvare l'immagine, ad esempio scaricandola o inviandola a un server
}
deleteGeneration(): void {
  console.log('Scarto richiesto');
  // Qui puoi aggiungere la logica per scartare l'immagine, ad esempio resettando lo stato o navigando via
}
saveChanges(e:any){// e in realtà sarà un Result (bisogna emetterlo da immagine-titolo quando si cambia titolo o immagine)
  console.log('Salvataggio modifiche: comunicazione con AiAssistantServer ancora da fare', e);
}
onImageSelected(file: File): void {
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePath = reader.result as string;
  };
  reader.readAsDataURL(file);
}
enableEditing(): void{
  this.isEditable = true;
  console.log('Modifica richiesta');
  this.readonly = false;
  // Qua si andrà alla pagina di modifica
}
}
