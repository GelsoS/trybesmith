export interface Produto{
  name: string;
  amount: string;
}

export interface ProdutoReturn extends Produto{
  id: number;
}

export interface Products extends Produto {
  id: number,
  orderId: number,
}