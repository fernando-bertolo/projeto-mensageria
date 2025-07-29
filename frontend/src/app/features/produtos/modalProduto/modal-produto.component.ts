import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpService } from '../http.service';
import { Produto } from '../interfaces';

@Component({
  selector: 'app-modal-produto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './modal-produto.component.html'
})
export class ModalProdutoComponent implements OnInit {
  @Output() produtoAdicionado = new EventEmitter<void>();
  @Output() modalFechado = new EventEmitter<void>();
  
  formulario!: FormGroup;
  carregando = false;

  constructor(private fb: FormBuilder, private httpService: HttpService){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }

  sendProduto() {
    if(!this.formulario.valid) {
      console.log("Formulário inválido!");
      this.formulario.markAllAsTouched();
      return;
    }
    this.carregando = true;

    const dados: Produto = this.formulario.value;
    console.log(dados);

    this.httpService.cadastrarProduto(dados).subscribe({
      next: (res) => {
        console.log('Produto cadastrado com sucesso!', res);
        this.formulario.reset();
        this.produtoAdicionado.emit();
        this.fecharModal();
      },
      error: (err) => {
        console.error('Erro ao cadastrar produto: ', err);
        this.carregando = false;
      },
      complete: () => {
        this.carregando = false;
      }
    });
  }

  fecharModal(): void {
    this.modalFechado.emit();
  }
}
