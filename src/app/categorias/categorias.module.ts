import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    CoreModule,
    MatTableModule
  ]
})
export class CategoriasModule { }
