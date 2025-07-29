import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { Produto } from './interfaces';
import { ModalProdutoComponent } from './modalProduto/modal-produto.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ModalProdutoComponent],
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = false;
  modalAberto = false;

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;
    this.httpService.listarProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
      complete: () => {
        this.carregando = false;
      }
    });
  }

  editarProduto(produto: Produto): void {
    console.log('Editar produto:', produto);
  }

  excluirProduto(produto: Produto): void {
    if (confirm(`Tem certeza que deseja excluir o produto "${produto.nome}"?`)) {
      this.httpService.excluirProduto(produto.id!).subscribe({
        next: () => {
          console.log('Produto excluído com sucesso!');
          this.carregarProdutos();
        },
        error: (err) => {
          console.error('Erro ao excluir produto:', err);
        }
      });
    }
  }

  abrirModal(): void {
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
  }

  onProdutoAdicionado(): void {
    this.carregarProdutos();
    this.fecharModal();
  }
}
