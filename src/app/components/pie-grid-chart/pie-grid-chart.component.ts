import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-grid-chart',
  templateUrl: './pie-grid-chart.component.html',
  styleUrls: ['./pie-grid-chart.component.scss'],
  // 
  standalone: true,
  imports: [NgxChartsModule]
  // 
})
export class PieGridChartComponent  implements OnInit {

  constructor() { }

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;
  // Tamanhos (são definidos no html referente ao gráfico (EM COMPONENTS))
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Below;
  // 
  single: any[] = [];
  // 
  colorScheme: any = {
    domain: ['#5AA454']
  };

  ngOnInit() {
    this.single = [
      {
        "name": "Ligações",
        "value": 100
      }
    ]
  }

  onSelect(event: any) {
    console.log(event);
  }

}
