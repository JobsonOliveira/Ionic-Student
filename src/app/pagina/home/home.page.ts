import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonIcon, IonButtons, IonText, IonImg, IonFooter, IonInput, IonCheckbox, IonList, IonItem, IonLabel, IonAlert, IonButton, IonAccordion, IonAccordionGroup, IonBadge, IonBreadcrumbs, IonBreadcrumb, IonRippleEffect, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonChip, IonAvatar, IonDatetime, IonDatetimeButton, IonModal, IonPopover, IonPicker, IonPickerColumn, IonPickerColumnOption, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonIcon, IonButtons,  IonText, IonImg, IonFooter, IonInput, IonCheckbox, IonList, IonItem, IonLabel, IonAlert, IonButton, IonAccordion, IonAccordionGroup, IonBadge, IonBreadcrumbs, IonBreadcrumb, IonRippleEffect, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonChip, IonAvatar, IonDatetime, IonDatetimeButton, IonModal, IonPopover, IonPicker, IonPickerColumn, IonPickerColumnOption, 
  ]
})
export class HomePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  async fatch() {
    try {
      const options = {
        url: 'https://httpbin.org/get',
        headers: { 'X-Fake-Header': 'Fake-Value' },
        params: { size: 'XL' },
      };
    
      const response: HttpResponse = await CapacitorHttp.get(options);
    
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
    
}
