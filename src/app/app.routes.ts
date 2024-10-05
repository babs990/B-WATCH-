import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
    {
        path : 'acceuil',
        component : AcceuilComponent,
        title : 'Acceuil'
    },
    {path : '', redirectTo : '/acceuil', pathMatch : 'full'}
];
