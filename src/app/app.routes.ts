import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  // },
  {
    path: 'dasd',
    loadComponent: () => import('./pagina/home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
];
