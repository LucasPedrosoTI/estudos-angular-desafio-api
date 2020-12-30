import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';
import { Page } from '../model/Page';

@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string =
    'https://gft-desafio-api-vendas.herokuapp.com/api';

  protected devUrl: string = 'http://localhost:8080/api';

  protected token: string =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZGVzYWZpby1hcGkiXSwidXNlcl9uYW1lIjoiYWRtaW5AZ2Z0LmNvbSIsInNjb3BlIjpbInJlYWQiXSwiZXhwIjoxNjA5MzY3MDEyLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImp0aSI6IjE1WndVeS8rTmY4YlZlZCtQY0pwaHVURnJGOD0iLCJjbGllbnRfaWQiOiJhZG1pbiJ9.Qy3sW2QopU5qFhwSejoJRKvhtq63gf1pnUswXhyX1WXUbuKM9uEwbpONuMcwiQxpDgO8FYKIuVPMwQIkmrkzd58ictrASFvdIY0Zunwvv38ehMTQY1RktzyYGhq-58QVouScwYGqNt8LkDgMbw8UiHQvkjl7QK7PLbeiELrYvyqKNT_5RMjYzTtLCVDz2tCR0FFz4o5K43jdU7OIy3SykFEdImB1x9Nb7b3Vm3IXZlFgvGQuTOJqcpTIQsaSIfRTTbq108jUYmjQqpE1NnW5LnMmCkFoIdM8PRPBjxfn6RsAQD2cgsIJPFrFJgeBArPgM4nQmsS-M4jwpYTF2O7Aog';

  protected headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
  });

  obterProdutos(): Observable<Page<Produto>> {
    return this.http.get<Page<Produto>>(`${this.UrlServiceV1}/produtos`, {
      headers: this.headers,
    });
  }

  obterProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.UrlServiceV1}/produtos/${id}`, {
      headers: this.headers,
    });
  }
}
