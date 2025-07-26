import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./features/produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./features/pedidos/pedidos.module').then(m => m.PedidosModule)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
