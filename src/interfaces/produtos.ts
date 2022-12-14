export interface Produto {
  name: string;
  amount: string;
}

export interface ProdutoReturn extends Produto {
  id: number;
}

export interface Products extends Produto {
  id: number,
  orderId: number,
}

export interface People {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface LoginUsr {
  username: string,
  password: string,
}

export interface Resposta {
  status: number,
  message: string,
}

export interface Order{
  productsIds: Array<number>
}