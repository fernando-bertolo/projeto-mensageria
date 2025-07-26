import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/produtos-list/produtos-list.component').then(m => m.ProdutosListComponent)
  },
  {
    path: 'novo',
    loadComponent: () => import('./components/produto-form/produto-form.component').then(m => m.ProdutoFormComponent)
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./components/produto-form/produto-form.component').then(m => m.ProdutoFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/produto-detail/produto-detail.component').then(m => m.ProdutoDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProdutosModule { }
