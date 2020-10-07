import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsService } from './produits.service';
import { CategoriesComponent } from './categories/categories.component';
import { TypesComponent } from './types/types.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthentificationService } from './authentification.service'

const routes: Routes = [
  {'path':'produits', 'component': ProduitsComponent},
  {'path':'categories', 'component': CategoriesComponent},
  {'path':'categories/types', 'component': TypesComponent},
  {'path' : "login", component : ConnexionComponent}
  // path et component sont des cles de json 
  /// la cles est entre guimet vu que elle est une chaine de caractere parcontre produit component est une variabe 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

