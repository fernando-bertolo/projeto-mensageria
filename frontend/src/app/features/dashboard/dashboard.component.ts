import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Dados mockados para demonstração
  protected readonly totalProdutos = 0;
  protected readonly totalPedidos = 0;
  protected readonly ultimosProdutos: any[] = [];
  protected readonly ultimosPedidos: any[] = [];
}
