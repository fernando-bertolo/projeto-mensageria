import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}

@Component({
  selector: 'app-produto-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {
  produto: Produto | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarProduto(+id);
    }
  }

  carregarProduto(id: number): void {
    this.loading = true;
    // Aqui você faria a chamada para o serviço
    // Por enquanto, dados mockados
    setTimeout(() => {
      this.produto = {
        id: id,
        nome: 'Produto ' + id,
        preco: 29.99,
        descricao: 'Descrição detalhada do produto ' + id + '. Este é um produto de exemplo com uma descrição mais longa para demonstrar o componente de detalhes.'
      };
      this.loading = false;
    }, 1000);
  }

  editarProduto(): void {
    if (this.produto) {
      this.router.navigate(['/produtos/editar', this.produto.id]);
    }
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}
