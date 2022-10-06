// ng g service categorias/categorias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly API = '../../assets/categorias.json'


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Categorias[]>(this.API);
  }
}
