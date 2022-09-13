import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../core/model';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categorias[] = [

    {"id": 1, "nomecategoria": "Carros"},
    {"id": 2, "nomecategoria": "Motos"}

  ];

  displayedColumns = ['id', 'nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
