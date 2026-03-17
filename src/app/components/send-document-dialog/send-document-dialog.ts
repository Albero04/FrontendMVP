import {Component, inject} from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';

import { Button} from '../button/button';  
import { Menutendina } from '../menutendina/menutendina';
import { Prompt } from '../prompt/prompt';
@Component({
    selector: 'app-send-document-dialog',
    templateUrl: './send-document-dialog.html',
    styleUrl: './send-document-dialog.css',
    providers: [],
    imports: [TableModule, Button, Menutendina, Prompt]
})
export class SendDocumentDialog {
    public ref: DynamicDialogRef= inject(DynamicDialogRef);
    public config: DynamicDialogConfig= inject(DynamicDialogConfig);

    templates = [
        { name: 'Template 1', content: 'Descrizione del template 1' },
        { name: 'Template 2', content: 'Descrizione del template 2' },
        { name: 'Template 3', content: 'Descrizione del template 3' },
        { name: 'Template 4', content: 'Descrizione del template 4' },
        { name: 'Template 5', content: 'Descrizione del template 5' },
        { name: 'Template 6', content: 'Descrizione del template 6' },
    ];

    selectedTemplate: any = null;
    ngOnInit() {
    }


    closeDialog() {
        console.log("mi chiudo");
      }
      
      confirmDialog(){
        console.log("confermo");
        this.ref.close(this.selectedTemplate.name);

    }
}