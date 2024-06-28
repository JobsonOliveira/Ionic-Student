import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  standalone: true, // --
  imports: [NgxChartsModule] // --
})
export class VerticalBarChartComponent  implements OnInit {

  // OBS: Todas estas estilizações podem ser realizadas no HTML do gráfico, que fica na pasta 'component'

  // options
  // Descrição dos itens no bottom
  showXAxis = true; 
  // Descrição dos itens no left
  showYAxis = true;
  // Gradiente dos itens do grafico
  gradient = true; 
  // Apresentar Legenda de cada item
  showLegend = true; 
  // Label horizontal (bottom)
  showXAxisLabel = true;
  // Titulo da label horizontal
  xAxisLabel = 'Country';
  // Label vertical (left)
  showYAxisLabel = true; 
  // Titulo da label vertical
  yAxisLabel = 'Population';
  // Tamanhos (são definidos no html referente ao gráfico (EM COMPONENTS))
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Below;
  // Cores para cara delemento do gráfico
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single: any[] = []; 

  constructor() { }

  ngOnInit() {

    // Dados que alimentão o gráfico
    this.single = [
      {
        "name": "Ramais",
        "value": 20
      },
      {
        "name": "Agentes",
        "value": 15
      },
      {
        "name": "Supervisores",
        "value": 5
      }
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

}
