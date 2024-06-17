import { Component, OnInit } from '@angular/core';
import { ListaDescontos } from 'projects/api/src/lib/descontos';
import { DescontoService } from 'projects/api/src/lib/descontos/desconto.service';
import { ObterListaDescontoRequest } from 'projects/api/src/lib/descontos/models/requests/obter-lista-descontos-request';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [
        CommonModule,
    ],
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    inscricao: Subscription;
    steam: ListaDescontos;
    gog: ListaDescontos;
    origin: ListaDescontos;
    uplay: ListaDescontos;
    epicGames: ListaDescontos;
    blizzard: ListaDescontos;

    constructor(private service: DescontoService) {

    }

    ngOnInit(): void {
        const requestSteam = new ObterListaDescontoRequest('1')
        this.inscricao = this.service.obterListaDescontosMenor(requestSteam)
            .subscribe((res: ListaDescontos) => {
                this.steam = res
            });

        const requestGog = new ObterListaDescontoRequest('7')
        this.inscricao = this.service.obterListaDescontosMenor(requestGog)
            .subscribe((res: ListaDescontos) => {
                this.gog = res
            });

        const requestOrigin = new ObterListaDescontoRequest('8')
        this.inscricao = this.service.obterListaDescontosMenor(requestOrigin)
            .subscribe((res: ListaDescontos) => {
                this.origin = res
            });

        const requestUplay = new ObterListaDescontoRequest('13')
        this.inscricao = this.service.obterListaDescontosMenor(requestUplay)
            .subscribe((res: ListaDescontos) => {
                this.uplay = res
            });

        const requestEpicGames = new ObterListaDescontoRequest('25')
        this.inscricao = this.service.obterListaDescontosMenor(requestEpicGames)
            .subscribe((res: ListaDescontos) => {
                this.epicGames = res
            });

        const requestBlizzard = new ObterListaDescontoRequest('31')
        this.inscricao = this.service.obterListaDescontosMenor(requestBlizzard)
            .subscribe((res: ListaDescontos) => {
                this.blizzard = res
            });
    }

}
