import {Component, inject, Input} from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { AsyncPipe } from '@angular/common';

import { Button} from '../button/button';  
import { Menutendina } from '../menutendina/menutendina';
import { Prompt } from '../prompt/prompt';
import { Observable } from 'rxjs';
import { AddDialog,AddDialogType } from '../add-dialog/add-dialog';
import { AttachFile } from "../attach-file/attach-file";
@Component({
    selector: 'app-send-document-dialog',
    templateUrl: './send-document-dialog.html',
    styleUrl: './send-document-dialog.css',
    providers: [],
    imports: [TableModule, Button, Menutendina, Prompt, AsyncPipe, AddDialog, AttachFile]
})
export class SendDocumentDialog {
    public ref: DynamicDialogRef= inject(DynamicDialogRef);
    public config: DynamicDialogConfig= inject(DynamicDialogConfig);

    addDialogVisible: boolean = false;
    addDialogType: AddDialogType = 'tone';
    
    @Input() options: any[] = [];
    templates$: Observable<any[]> | undefined;
    selectedTemplate: any = null;
    ngOnInit() {
        if (this.config.data && this.config.data.templates$) {
            this.templates$ = this.config.data.templates$;
        }
    }

    openAddDialog(type: AddDialogType): void {
        this.addDialogType = type;
        this.addDialogVisible = true;
    }
    closeDialog() {
        console.log("mi chiudo");
        this.ref.close();
    }
      
    confirmDialog(){
        console.log("confermo");
        this.ref.close(this.selectedTemplate.name);
    }
}