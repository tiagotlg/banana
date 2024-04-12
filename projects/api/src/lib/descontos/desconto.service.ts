import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaDescontos } from './models';
import { map, Observable } from 'rxjs';
import { ObterListaDescontoRequest } from './models/requests/obter-lista-descontos-request';

@Injectable({
  providedIn: 'root'
})
export class DescontoService {

  constructor(private http: HttpClient) { }

  url(): string {
    return `https://localhost:40000/api/v1/Desconto`
  }

  obterListaDescontos(request: ObterListaDescontoRequest): Observable<ListaDescontos> {
    return this.http.post<ListaDescontos>(`${this.url()}/BuscaPorDescontos`, request)
      .pipe(map(o => o));
  }
}