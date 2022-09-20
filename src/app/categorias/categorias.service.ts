// ng g service categorias/categorias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  list(): Categorias[] {
    return [
    {"id": 1, "nomecategoria": "Carros"},
    {"id": 2, "nomecategoria": "Motos"}
    ]
  }
}
