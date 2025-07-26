import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Pedido {
  id: number;
  data: Date;
  status: string;
  cliente: string;
  valor: number;
}

@Component({
  selector: 'app-pedidos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  pedidos: Pedido[] = [];
  loading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    this.loading = true;
    // Aqui você faria a chamada para o serviço
    // Por enquanto, dados mockados
    setTimeout(() => {
      this.pedidos = [
        { id: 1, data: new Date('2024-01-15'), status: 'Pendente', cliente: 'João Silva', valor: 89.97 },
        { id: 2, data: new Date('2024-01-14'), status: 'Aprovado', cliente: 'Maria Santos', valor: 149.99 }
      ];
      this.loading = false;
    }, 1000);
  }

  novoPedido(): void {
    this.router.navigate(['/pedidos/novo']);
  }

  editarPedido(id: number): void {
    this.router.navigate(['/pedidos/editar', id]);
  }

  verPedido(id: number): void {
    this.router.navigate(['/pedidos', id]);
  }

  excluirPedido(id: number): void {
    if (confirm('Tem certeza que deseja excluir este pedido?')) {
      // Aqui você faria a chamada para excluir
      this.pedidos = this.pedidos.filter(p => p.id !== id);
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'aprovado':
        return 'bg-green-100 text-green-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}
