import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  formulario!: FormGroup;
  carregando = false;
  
  constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }

  clicar() {
    if(!this.formulario.valid) {
      console.log("Formulário inválido!");
      this.formulario.markAllAsTouched();
      return;
    }
    this.carregando = true;

    const dados = this.formulario.value;
  
    this.http.post('http://localhost:3000/api/v1/produtos', dados).subscribe({
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
