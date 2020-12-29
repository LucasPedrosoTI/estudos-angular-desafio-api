import { Produto } from './Produto';

export interface Fornecedor {
  id: number;
  cnpj: string;
  nome: string;
  produtos: Array<Produto>;
}
