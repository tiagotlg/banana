import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Jogos } from 'projects/api/src/lib/jogos';
import { JogoService } from 'projects/api/src/lib/jogos/jogo.service';
import { ObterJogosRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogos-request';
import { Subscription } from 'rxjs';

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
    ) { }

    pesquisarJogo(event: any): void {
        const requestJogos = new ObterJogosRequest(event.target.value)
        this.inscricao = this.service.obterJogos(requestJogos)
            .subscribe((res: Jogos[]) => {
                this.entidades = res
            });
    }
}
