import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menutendina } from '../components/menutendina/menutendina';
import { Upload } from '../components/upload/upload';
import { Button } from '../components/button/button';
import { Router } from '@angular/router';

//servizi
import { AiCoPilotService } from '../../services/ai-co-pilot-service';

@Component({
  selector: 'app-estrattore',
  imports: [FormsModule, Upload, Menutendina, Button],
  templateUrl: './estrattore.html',
  styleUrl: './estrattore.css',
})
export class Estrattore implements OnInit {
  private router = inject(Router);
  private aiService = inject(AiCoPilotService);

 // cambiabile quando c'è backend
  categories = [
    { id: 'vendite', name: 'Vendite' },
    { id: 'acquisti', name: 'Acquisti' },
    { id: 'logistica', name: 'Logistica' },
  ];
 // cambiabile quando c'è backend
  companies = [
    { id: 'acme', name: 'ACME S.p.A.' },
    { id: 'globex', name: 'Globex S.r.l.' },
    { id: 'initech', name: 'Initech' },
  ];
// cambiabile quando c'è backend
  departmentsByCompany: Record<string, Array<{ id: string; name: string }>> = {
    acme: [
      { id: 'amm', name: 'Amministrazione' },
      { id: 'hr', name: 'Risorse Umane' },
    ],
    globex: [
      { id: 'ops', name: 'Operations' },
      { id: 'it', name: 'IT' },
    ],
    initech: [
      { id: 'rnd', name: 'Ricerca e Sviluppo' },
      { id: 'sales', name: 'Sales' },
    ],
  };
// cambiabile quando c'è backend
  competenceMonthsYears = [
    { id: '2026-01', name: '01/2026' },
    { id: '2026-02', name: '02/2026' },
    { id: '2026-03', name: '03/2026' },
    { id: '2026-04', name: '04/2026' },
  ];

  departments: Array<{ id: string; name: string }> = [];

  selectedCategory: any = null;
  selectedCompany: any = null;
  selectedDepartment: any = null;
  selectedCompetenceMonthYear: any = null;
  selectedFiles: File[] = [];

  //controlla se tutti i campi necessari sono stati selezionati e se ci sono file da caricare
  get canUpload(): boolean {
    return !!(
      this.selectedCategory &&
      this.selectedCompany &&
      this.selectedDepartment &&
      this.selectedCompetenceMonthYear &&
      this.selectedFiles.length > 0
    );
  }

  ngOnInit(): void {
    this.aiService.fetchCategories();
    this.aiService.fetchCompanies();
  }

  // quando cambia la categoria, resetta le selezioni di azienda, dipartimento e mese/anno competenza
  onCompanyChange(company: any): void {
    this.selectedCompany = company;
    this.selectedDepartment = null;
    this.departments = company?.id ? this.departmentsByCompany[company.id] ?? [] : [];

    if (company?.id) {
      this.aiService.fetchDepartments(company.id);
    }
  }
  
  // riceve i file selezionati dal componente di upload e li memorizza nello stato del componente
  onFilesSelected(files: File[]): void {
    this.selectedFiles = files ?? [];
  }
  // quando l'utente clicca su "Carica", verifica se è possibile caricare e poi naviga alla pagina dello storico (placeholder per ora)
  upload(): void {
    if (!this.canUpload) {
      return;
    }

    
    this.router.navigate(['/storico-ai-copilot']);
  }

}
