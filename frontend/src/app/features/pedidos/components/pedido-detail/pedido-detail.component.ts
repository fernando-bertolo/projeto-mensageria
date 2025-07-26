import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Pedido {
  id: number;
  data: Date;
  status: string;
  cliente: string;
  valor: number;
}

@Component({
  selector: 'app-pedido-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedido-detail.component.html',
  styleUrls: ['./pedido-detail.component.css']
})
export class PedidoDetailComponent implements OnInit {
  pedido: Pedido | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarPedido(+id);
    }
  }

  carregarPedido(id: number): void {
    this.loading = true;
    // Aqui você faria a chamada para o serviço
    setTimeout(() => {
      this.pedido = {
        id: id,
        data: new Date(),
        status: 'Pendente',
        cliente: 'Cliente ' + id,
        valor: 99.99
      };
      this.loading = false;
    }, 1000);
  }

  editarPedido(): void {
    if (this.pedido) {
      this.router.navigate(['/pedidos/editar', this.pedido.id]);
    }
  }

  voltar(): void {
    this.router.navigate(['/pedidos']);
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
