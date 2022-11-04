export interface Produto{
  name: string;
  amount: string;
}

export interface ProdutoReturn extends Produto{
  id: number;
}
