export interface Categorias {
  id?: number;
  nomecategoria?: string;
}

export interface Produtos {
  id: number;
  nomeproduto: string;
  produtopreco: number;
  categoria_id: number;
}
