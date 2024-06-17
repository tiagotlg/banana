import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { ListaDescontos } from 'projects/api/src/lib/descontos';
import { Subscription } from 'rxjs';
import { DescontoService } from 'projects/api/src/lib/descontos/desconto.service';
import { ObterListaDescontoRequest } from 'projects/api/src/lib/descontos/models/requests/obter-lista-descontos-request';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    SliderModule,
    CheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    DialogModule,
    MultiSelectModule
  ],
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
  formulario: FormGroup;
  inscricao: Subscription;
  entidades: ListaDescontos[];

  mostrarSelecaoLojas: boolean = false;
  lojasDisponiveis: { label: string, value: string }[] = [
    { label: 'Steam', value: '1' },
    { label: 'Origin', value: 'origin' },
    { label: 'Ubisoft Store', value: 'ubisoft' },
    { label: 'Blizzard Shop', value: 'blizzard' },
    { label: 'GOG', value: 'gog' },
    { label: 'Epic Games Store', value: 'epic' },
  ];
  lojasSelecionadas: string[] = [];
  
  priceRange: number = 50;
  steamRating: number = 100;

  constructor(private service: DescontoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      preco: [0],
      porcentagem: [0],
      lojas: [this.lojasSelecionadas]
    });
  }

  onSubmit(): void {
    console.log(this.formulario.value);
  }

  pesquisar(): void {
    console.log('Pesquisar', this.formulario.value.titulo);
  }

  lojas(): void {
    this.mostrarSelecaoLojas = true;
  }

  onLojasChange(event: any): void {
    this.lojasSelecionadas = event.value;
    this.formulario.get('lojas')?.setValue(this.lojasSelecionadas);
  }

  fecharDialog(): void {
    this.mostrarSelecaoLojas = false;
  }

//   pesquisarJogo(): void {
//     const requestJogos = new ObterListaDescontoRequest()
//     this.inscricao = this.service.obterListaDescontos(requestJogos)
//         .subscribe((res: ListaDescontos[]) => {
//             this.entidades = res
//         });
// }
}
