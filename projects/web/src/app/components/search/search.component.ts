import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Jogo, Jogos } from 'projects/api/src/lib/jogos';
import { JogoService } from 'projects/api/src/lib/jogos/jogo.service';
import { ObterJogoRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogo-request';
import { ObterJogosRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogos-request';
import { exhaustMap, Subscription, tap } from 'rxjs';

@Component({
    selector: 'web-search',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './search.component.html'
})
export class SearchComponent {
    inscricao: Subscription;
    entidades: any;
    lojas: any[] = [];

    constructor(
        private service: JogoService
    ) { }

    pesquisarJogo(event: any): void {
        const requestJogos = new ObterJogosRequest(event.target.value)
        this.inscricao = this.service.obterJogos(requestJogos)
            .pipe(exhaustMap((o: any) => {
                this.entidades = o
                return o.map((o: Jogos) => {
                    const requestJogo = new ObterJogoRequest(o.jogoID)
                    return this.service.obterJogo(requestJogo)
                })
            }))
            .subscribe((res: any) => {
                res.subscribe(o => {
                    if (o.descontoJogoResumo) {
                        this.lojas.push(o?.descontoJogoResumo)
                    }
                })
            })
    }
}
