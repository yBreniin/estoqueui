import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private readonly API = 'http://localhost:8080/produtos/todos';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produtos[]>(this.API);
  }
}
