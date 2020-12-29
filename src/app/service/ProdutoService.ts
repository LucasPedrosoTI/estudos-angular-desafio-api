import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';
import { Page } from '../model/Page';

@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string =
    'https://gft-desafio-api-vendas.herokuapp.com/api/';

  protected devUrl: string = 'http://localhost:8080/api/';

  protected token: string =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZGVzYWZpby1hcGkiXSwidXNlcl9uYW1lIjoiYWRtaW5AZ2Z0LmNvbSIsInNjb3BlIjpbInJlYWQiXSwiZXhwIjoxNjA5MjcxNDg5LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImp0aSI6IkRwUFdPK2pvTjgvUTk3UnlybU00MDRPUEJCdz0iLCJjbGllbnRfaWQiOiJhZG1pbiJ9.YITFQGpjsaxCcs_v9p7QviJ0hbCRVnC7l1sZV-kPXYd2rVlpV2vS023rzCYSTylDfNK0gdK3y0wWwPRtsTJGoSzzwgUqlenrHNcET1d1k4-zY3w5pkuLwj7haM5FG7qV2TSz1SduBCsrZhWqfmDQOhNOZjXDkdjL4KP8oT8lEhZQxhHGONVs9LFQHytUeLannTCHzet9_qXwzY9Hm3MMeU5dPbNw9tC1KnIbZAc59VPQ6iRugVW3SaUrrDQfMHUkudxN4LePGaTxk-eLJ7k-Dhs877VHPnCPTKDrLW3S8AxByu2MbX0xSzOK-NiGbWiTWoOq-8iWxTkVPSQlcsWoJA';

  protected headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
  });

  obterProdutos(): Observable<Page<Produto>> {
    return this.http.get<Page<Produto>>(this.devUrl + 'produtos', {
      headers: this.headers,
    });
  }
}
