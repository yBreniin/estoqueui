// ng g service categorias/categorias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private readonly API = 'http://localhost:8080/categorias/todas';

  constructor(private http: HttpClient) {}

  list(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.API);
  }
}
