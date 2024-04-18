import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Jogo, Jogos } from 'projects/api/src/lib/jogos';
import { JogoService } from 'projects/api/src/lib/jogos/jogo.service';
import { DescontoJogoResumo } from 'projects/api/src/lib/jogos/models/objects/descontoJogoResumo';
import { ObterJogoRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogo-request';
import { ObterJogosRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogos-request';
import { LojaService } from 'projects/api/src/lib/lojas/loja.service';
import { exhaustMap, Subscription, tap } from 'rxjs';

@Component({
    selector: 'web-search',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './search.component.html'
})
export class SearchComponent {
    inscricao: Subscription;
    entidades: Jogos[];
    maisBarato: boolean = false;

    constructor(
        private service: JogoService,
        private lojaService: LojaService
    ) { }

    pesquisarJogo(event: any): void {
        const requestJogos = new ObterJogosRequest(event.target.value)
        this.inscricao = this.service.obterJogos(requestJogos)
            .subscribe((res: Jogos[]) => {
                this.entidades = res
            });
    }
}
