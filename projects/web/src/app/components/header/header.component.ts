import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DescontoService } from 'projects/api/src/lib/descontos/desconto.service';
import { ObterDescontoRequest } from 'projects/api/src/lib/descontos/models/requests/obter-desconto-request';
import { ObterListaDescontoRequest } from 'projects/api/src/lib/descontos/models/requests/obter-lista-descontos-request';
import { Jogos } from 'projects/api/src/lib/jogos';
import { JogoService } from 'projects/api/src/lib/jogos/jogo.service';
import { ObterJogoRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogo-request';
import { ObterJogosRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogos-request';
import { LojaService } from 'projects/api/src/lib/lojas/loja.service';
import { ObterLojaRequest } from 'projects/api/src/lib/lojas/models/requests/obter-loja-request';

@Component({
  selector: 'page-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: JogoService,
    private lojaService: LojaService,
    private descontoService: DescontoService
  ) { }

  pesquisarJogo(event: any): void {
    const requestJogos = new ObterJogosRequest(event.target.value)
    this.service.obterJogos(requestJogos).subscribe(o => console.log(o))

    // this.service.obterJogo(requestJogo).subscribe(o => console.log(o))

    // this.lojaService.obterLoja().subscribe(o => console.log(o))

    // const requestListaDescontos = new ObterListaDescontoRequest('1', '15', '')
    // this.descontoService.obterListaDescontos(requestListaDescontos).subscribe(o => console.log(o))

    // const requestDesconto = new ObterDescontoRequest('qUoxvgFJumq01yMxEcQbC5pUbeyYIdj%252BDd70RFxFCrI%253D')
    // this.descontoService.obterDesconto(requestDesconto).subscribe(o => console.log(o))

    this.router.navigate(['/search'], { relativeTo: this.activatedRoute });
  }
}
