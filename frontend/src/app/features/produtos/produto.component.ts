import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpService } from './http.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {
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

    const dados = this.formulario.value;

    this.httpService.cadastrarProduto(dados).subscribe({
      next: (res) => {
        console.log('Produto cadastrado com sucesso!', res);
        this.formulario.reset();
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
}
