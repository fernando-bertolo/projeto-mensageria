import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pedidos-list/pedidos-list.component').then(m => m.PedidosListComponent)
  },
  {
    path: 'novo',
    loadComponent: () => import('./components/pedido-form/pedido-form.component').then(m => m.PedidoFormComponent)
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./components/pedido-form/pedido-form.component').then(m => m.PedidoFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/pedido-detail/pedido-detail.component').then(m => m.PedidoDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PedidosModule { }
