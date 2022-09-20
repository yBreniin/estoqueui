import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../core/model';
import { CategoriasService } from '../categorias.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categorias[] = [];

  displayedColumns = ['id', 'nomecategoria'];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categorias = this.categoriasService.list();
  }

}
