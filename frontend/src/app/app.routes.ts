import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    loadComponent: () => import('./features/produtos/produto.component').then(m => m.ProdutoComponent)
  },
  {
    path: '**',
    redirectTo: '/produtos'
  }
];
