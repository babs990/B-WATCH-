import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './catalogue/produit/produit.component';

export const routes: Routes = [
    {
        path : 'acceuil',
        component : AcceuilComponent,
        title : 'Acceuil'
    },
    {
        path : 'catalogue',
        component : CatalogueComponent,
        title : 'Catalogue'
    },
    {
        path : 'catalogue/produit/:id',
        component : ProduitComponent,
        title : 'produit'
    },
    {path : '', redirectTo : '/acceuil', pathMatch : 'full'}
];
