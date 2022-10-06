import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../../core/model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categorias: Observable<Categorias[]>;

  displayedColumns = ['id', 'nomecategoria'];

  constructor(private categoriasService: CategoriasService) {
    this.categorias = this.categoriasService.list();
  }

  ngOnInit(): void {}
}
