import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Para fazer requsições (espoecífico do Capacitor, feitos para projetos contruidos com ele)
import {
  CapacitorHttp,
  HttpResponse
} from '@capacitor/core';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonCard,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import {
  body,
  construct,
  heartDislike
} from 'ionicons/icons';

// import { VerticalBarChartComponent } from 'src/app/components/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonMenuButton,
    // VerticalBarChartComponent,
    PieChartComponent,
    NgClass,
    IonCard,
    IonCardTitle,
    IonCardContent,
  ]
})
export class HomePage implements OnInit {
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;

  constructor( private platform: Platform ) { }

  ngOnInit() {
    this.changeLegendPosition(false);
    this.handleScreenSizeChange();

    const teste = document.getElementById('teste') as HTMLElement;
    console.log(teste);
  }

  // Posição da legenda
  changeLegendPosition(defaultValue = true) {
    this.legendPosition = defaultValue ? LegendPosition.Right : LegendPosition.Below
    this.below = !defaultValue;
  }

  // Controlando o tamanho do gráfico
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenSizeChange();
  }

  handleScreenSizeChange() {
    const width = this.platform.width();
    const height = this.platform.height();
    console.log(width, height);

    if(width > height) {
      this.view = [
        // 0.9 * width,
        // 0.9 * height
      ];
    }
    else {
      this.view = [
        // 0.95 * width,
        // 0.45 * height
      ];
    }
  }

  async request() {
    console.log('fetch');
  }

  // ------------
  onClick() {
    console.log('foi');
  }
}
