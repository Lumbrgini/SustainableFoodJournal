import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from '@ionic/angular';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.page.html',
  styleUrls: ['./navigation-tabs.page.scss'],
  imports: [
    IonTabs,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonTabBar,
    CommonModule,
    FormsModule,
  ],
})
export class NavigationTabsPage {
  constructor() {}
}
