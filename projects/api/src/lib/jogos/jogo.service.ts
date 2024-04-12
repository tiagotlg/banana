import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObterJogosRequest } from './models/requests/obter-jogos-request';
import { Jogos } from './models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  url(): string {
    return `https://localhost:40000/api/v1/Jogo`
  }

  obterJogos(request: ObterJogosRequest): Observable<Jogos> {
    console.log(`${this.url()}/BuscaPorNome/${request.nome}`)
    return this.http.get<Jogos>(`${this.url()}/BuscaPorNome/${request.nome}`)
      .pipe(map(o => o));
  }
}
