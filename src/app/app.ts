import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MenuModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('ProvaPrimeNg');
  private messageService = inject(MessageService);
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'AI ASSISTANT GENERATIVO',
        items: [
          {
            label: 'Generatore',
            icon: 'pi pi-sparkles',
            routerLink: '/generatore'
          },
          {
             label: 'Storico',
            icon: 'pi pi-history',
            routerLink: '/storico'
          }
        ]
      },
      {
        label: 'AI CO-PILOT PER CDL',
        items: [
          {
            label: 'Estrattore',
            icon: 'pi pi-sparkles',
            routerLink: '/estrattore'
          },
          {
             label: 'Storico',
            icon: 'pi pi-history',
            routerLink: '/storico'
          }
        ]
      },
      {
        label: 'ANALYTICS',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-sparkles',
            routerLink: '/analytics'
          }
        ]
      }
    ];
  }
  
}
