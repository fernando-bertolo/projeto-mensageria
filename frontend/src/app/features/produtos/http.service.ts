import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/produtos`, produto);
  }
}
