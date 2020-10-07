import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsService } from './produits.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { TypesComponent } from './types/types.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthentificationService } from './authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProduitsComponent,
    CategoriesComponent,
    TypesComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProduitsService, AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
