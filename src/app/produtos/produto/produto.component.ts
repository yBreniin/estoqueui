import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../../core/model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  produtos: Observable<Produtos[]>;

  displayedColumns = ['id', 'nomeproduto', 'produtopreco', 'categoria_id'];

  constructor(private produtosService: ProdutosService) {
    this.produtos = this.produtosService.list();
  }

  ngOnInit(): void {}
}
