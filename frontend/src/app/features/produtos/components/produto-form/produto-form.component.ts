import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produtoForm: FormGroup;
  isEditando = false;
  produtoId: number | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', [Validators.required, Validators.min(0)]],
      descricao: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditando = true;
      this.produtoId = +id;
      this.carregarProduto(this.produtoId);
    }
  }

  carregarProduto(id: number): void {
    this.loading = true;
    // Aqui você faria a chamada para o serviço
    // Por enquanto, dados mockados
    setTimeout(() => {
      const produto = {
        id: id,
        nome: 'Produto ' + id,
        preco: 29.99,
        descricao: 'Descrição do produto ' + id
      };
      this.produtoForm.patchValue(produto);
      this.loading = false;
    }, 1000);
  }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      this.loading = true;
      const produto = this.produtoForm.value;

      // Aqui você faria a chamada para o serviço
      setTimeout(() => {
        console.log('Produto salvo:', produto);
        this.loading = false;
        this.router.navigate(['/produtos']);
      }, 1000);
    }
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

  get nome() { return this.produtoForm.get('nome'); }
  get preco() { return this.produtoForm.get('preco'); }
  get descricao() { return this.produtoForm.get('descricao'); }
}
