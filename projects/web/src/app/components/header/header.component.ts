import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JogoService } from 'projects/api/src/lib/jogos/jogo.service';
import { ObterJogosRequest } from 'projects/api/src/lib/jogos/models/requests/obter-jogos-request';

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
    private service: JogoService
  ) { }

  pesquisarJogo(event: any): void {
    const request = new ObterJogosRequest(event.target.value)
    this.service.obterJogos(request).subscribe(o => console.log(o))

    this.router.navigate(['/search'], { relativeTo: this.activatedRoute });
  }
}
