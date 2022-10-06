export interface Categorias {
  id: number;
  nomecategoria: string;
}

export interface Produtos {
  id: number;
  nomeproduto: string;
  categoria_id: number;
}
