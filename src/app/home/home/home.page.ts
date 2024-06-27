import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Para fazer requsições (espoecífico do Capacitor, feitos para projetos contruidos com ele)
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonMenuButton } from '@ionic/angular/standalone';
import { body } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonMenuButton]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async request() {
    console.log('fetch');
  }

  

  // vartt = new teste.default();

  // ----------------------------------------------------------------------------


}
