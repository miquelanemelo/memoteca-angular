import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'O homem que não valoriza a si mesmo, não pode valorizar nada nem ninguém. As pessoas acham que o mentiroso triunfa sobre suas vítimas. O que aprendi é que uma mentira é um ato de autoabdicação, porque quem mente entrega sua realidade à pessoa para quem a mentira se dirige, tornando-se servo daquele indivíduo, ficando condenado dali em diante a falsear a realidade tal qual ela exige. E, ainda que se consiga atingir o objetivo imediato visado pela mentira, o preço que se paga é a destruição daquilo que se pretendia obter. O homem que mente para o mundo é escravo do mundo dali em diante.',
      autoria: 'Ayn Rand',
      modelo: 'modelo1'
    }
  ];
}
