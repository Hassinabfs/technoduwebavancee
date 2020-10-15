import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { TypesComponent } from './types/types.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {'path':'produits', 'component': ProduitsComponent},
  {'path':'categories', 'component': CategoriesComponent},
  {'path':'categories/:categorie', 'component': TypesComponent},
  {'path' : "login", component : ConnexionComponent}
  // path et component sont des cles de json 
  /// la cles est entre guimet vu que elle est une chaine de caractere parcontre produit component est une variabe 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

