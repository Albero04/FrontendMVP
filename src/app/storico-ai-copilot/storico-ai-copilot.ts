import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tables } from '../components/tables/tables';
import { Filters } from '../components/filters/filters';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'app-storico-ai-copilot',
  imports: [FormsModule, Tables, Filters],
  templateUrl: './storico-ai-copilot.html',
  styleUrl: './storico-ai-copilot.css',
})
export class StoricoAiCopilot {
  Documents: any[] = [];
  FilteredDocuments: any[] = [];
  items : MenuItem[] = [];
  dates: Date[] | undefined;
  IDs: number[] = [1.1, 1.2, 1.3, 1.4];
  searchvalue = '';
  Companies: string[] = ['AlbertoSrl', 'ProvaSrl'];
  selectedCompany: string | undefined;
  DocumentType: string[] = ['Cedolino', 'TFR', 'Boh'];
  selectedDocument: string | undefined;
  columns = [
    { field: 'DocumentName', header: 'Nome Documento Originale' },
    { field: 'Id', header: 'Id' },
    { field: 'Confidence', header: 'Confidenza' },
    { field: 'ListaDestinazione', header: 'Lista di destinazione' },
    { field: 'State', header: 'Stato' },
    { field: 'Data', header: 'Data analisi', type: 'date' },
  ];
  ngOnInit() {
        this.items = [
            {
                items: [
                    {
                        label: 'Modifica',
                        icon: 'pi pi-pencil',
                    },
                    {   
                        label: 'Elimina',
                        icon: 'pi pi-trash'
                    }
                ]
            }
        ];
    this.Documents = [
      {
        Company: 'AlbertoSrl',
        TypeofDocument: 'Cedolino',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[0],
        Confidence: '15%',
        ListaDestinazione: 'Luca Slongo, Alberto Autiero',
        State: 'Pronto',
        Data: new Date('2024, 9, 11'),
      },
      {
        Company: 'ProvaSrl',
        TypeofDocument: 'TFR',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[1],
        Confidence: '25%',
        ListaDestinazione: 'Luca Slongo, Alberto Pignat',
        State: 'Pronto',
        Data: new Date('2024, 8, 11'),
      },
      {
        Company: 'AlbertoSrl',
        TypeofDocument: 'Boh',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[2],
        Confidence: '45%',
        ListaDestinazione: 'Luca Slongo, Leonardo Salviato',
        State: 'Pronto',
        Data: new Date('2024, 7, 11'),
      },
      {
        Company: 'ProvaSrl',
        TypeofDocument: 'TFR',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[3],
        Confidence: '55%',
        ListaDestinazione: 'Luca Slongo, Gordol',
        State: 'Pronto',
        Data: new Date('2026, 4, 11'),
      },
      {
        Company: 'AlbertoSrl',
        TypeofDocument: 'Cedolino',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[2],
        Confidence: '75%',
        ListaDestinazione: 'Luca Slongo',
        State: 'Pronto',
        Data: new Date('2023, 9, 11'),
      },
      {
        Company: 'ProvaSrl',
        TypeofDocument: 'TFR',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[3],
        Confidence: '85%',
        ListaDestinazione: 'Luca Slongo',
        State: 'Pronto',
        Data: new Date('2022, 1, 11'),
      },
      {
        Company: 'AlbertoSrl',
        TypeofDocument: 'Cedolino',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[1],
        Confidence: '95%',
        ListaDestinazione: 'Luca Slongo',
        State: 'Pronto',
        Data: new Date('2021, 7, 11'),
      },
      {
        Company: 'ProvaSrl',
        TypeofDocument: 'Cedolino',
        DocumentName: 'Lorem ipsum dolor sit amet',
        Id: this.IDs[0],
        Confidence: '99%',
        ListaDestinazione: 'Luca Slongo',
        State: 'Pronto',
        Data: new Date('2020, 5, 11'),
      },
    ];
    this.FilteredDocuments = this.Documents;
  }
  onSearchChange(value: string) {
    this.searchvalue = value;
    this.applyFilters();
  }
  onDateChange(dates: Date[]) {
    this.dates = dates;
    this.applyFilters();
  }
  onDocumentChange(document: string | undefined) {
    this.selectedDocument = document;
    this.applyFilters();
  }
  onCompanyChange(company: string | undefined) {
    this.selectedCompany = company;
    this.applyFilters();
  }
  applyFilters() {
    this.FilteredDocuments = this.Documents.filter((g) => {
      const matchSearch =
        !this.searchvalue ||
        g.DocumentName.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
        g.Id.toString().toLowerCase().includes(this.searchvalue.toLowerCase()) ||
        g.Confidence.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
        g.ListaDestinazione.toLowerCase().includes(this.searchvalue.toLowerCase()) ||
        g.State.toLowerCase().includes(this.searchvalue.toLowerCase());
      const matchDocument = !this.selectedDocument || g.TypeofDocument === this.selectedDocument;
      const matchCompany = !this.selectedCompany || g.Company === this.selectedCompany;
      const matchDate =
        !this.dates ||
        this.dates.length !== 2 ||
        (new Date(g.Data) >= this.dates[0] && new Date(g.Data) <= this.dates[1]);
      return matchCompany && matchDate && matchDocument && matchSearch;
    });
  }
}
