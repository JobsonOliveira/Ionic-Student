import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { ramaisData, agentesData, supervisoresData } from '../../home/data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true, // --
  imports: [NgxChartsModule] // --
})
export class PieChartComponent  implements OnInit {

  ramaisData: any;
  agentesData : any;
  supervisoresData : any;

  // @Input() view: any;
  view: any = [400, 800];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: any = 'bottom';
  // @Input() legendPosition = LegendPosition.Below;

  colorScheme: any = {
    domain: ['#4865F8', '#F2F2F2'],
  };

  constructor() {
    Object.assign(this, { ramaisData });
    Object.assign(this, { agentesData });
    Object.assign(this, { supervisoresData });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
  ngOnInit() {
  }
}
