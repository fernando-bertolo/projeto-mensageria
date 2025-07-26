import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {
  pedidoForm: FormGroup;
  isEditando = false;
  pedidoId: number | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pedidoForm = this.fb.group({
      cliente: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required, Validators.min(0)]],
      status: ['Pendente', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditando = true;
      this.pedidoId = +id;
      this.carregarPedido(this.pedidoId);
    }
  }

  carregarPedido(id: number): void {
    this.loading = true;
    // Aqui você faria a chamada para o serviço
    setTimeout(() => {
      const pedido = {
        id: id,
        cliente: 'Cliente ' + id,
        valor: 99.99,
        status: 'Pendente'
      };
      this.pedidoForm.patchValue(pedido);
      this.loading = false;
    }, 1000);
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      this.loading = true;
      const pedido = this.pedidoForm.value;

      setTimeout(() => {
        console.log('Pedido salvo:', pedido);
        this.loading = false;
        this.router.navigate(['/pedidos']);
      }, 1000);
    }
  }

  cancelar(): void {
    this.router.navigate(['/pedidos']);
  }

  get cliente() { return this.pedidoForm.get('cliente'); }
  get valor() { return this.pedidoForm.get('valor'); }
  get status() { return this.pedidoForm.get('status'); }
}
