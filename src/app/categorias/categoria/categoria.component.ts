import { Component, OnInit } from '@angular/core';
import CategoriasJson from '../../../assets/categorias.json';

interface CategoriasJson {
  id: number,
  nomecategoria: string,
}


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomecategoria'];
  dataSource = CategoriasJson;

  constructor() { }

  ngOnInit(): void {
  }

}
