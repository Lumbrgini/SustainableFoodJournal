import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'navigation-tabs',
    loadComponent: () => import('./layout/navigation-tabs/navigation-tabs.page').then((m) => m.NavigationTabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'food',
        loadComponent: () => import('./pages/food/food.page').then((m) => m.FoodPage),
      },
      {
        path: 'journal',
        loadComponent: () => import('./pages/journal/journal.page').then((m) => m.JournalPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', redirectTo: 'navigation-tabs/home', pathMatch: 'full' },
];
