import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';
import { Page } from '../model/Page';
import { Constants } from './constants';

@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient) {}

  obterProdutos(): Observable<Page<Produto>> {
    return this.http.get<Page<Produto>>(`${Constants.prodUrl}/produtos`, {
      headers: Constants.headers,
    });
  }

  obterProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${Constants.prodUrl}/produtos/${id}`, {
      headers: Constants.headers,
    });
  }
}
