import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  produtos: Produto[] = [];
  loading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.loading = true;
    // Aqui você faria a chamada para o serviço
    // Por enquanto, dados mockados
    setTimeout(() => {
      this.produtos = [
        { id: 1, nome: 'Produto 1', preco: 29.99, descricao: 'Descrição do produto 1' },
        { id: 2, nome: 'Produto 2', preco: 49.99, descricao: 'Descrição do produto 2' }
      ];
      this.loading = false;
    }, 1000);
  }

  novoProduto(): void {
    this.router.navigate(['/produtos/novo']);
  }

  editarProduto(id: number): void {
    this.router.navigate(['/produtos/editar', id]);
  }

  verProduto(id: number): void {
    this.router.navigate(['/produtos', id]);
  }

  excluirProduto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      // Aqui você faria a chamada para excluir
      this.produtos = this.produtos.filter(p => p.id !== id);
    }
  }
}
