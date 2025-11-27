import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./pages/home/home').then((c) => c.Home)
        },
    },
    {
        path: 'about',
        loadComponent: () => {
            return import('./pages/about/about').then((c) => c.About)
        },
    },
    {
        path: 'details/:id',
        loadComponent: ()=>{
            return import('./pages/details/details').then((c)=>c.Details)
        }
    }
];
