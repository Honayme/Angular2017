import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PizzaComponent} from './pizza/pizza.component';
import {IngredientComponent} from './ingredient/ingredient.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {PizzaCloud9Service} from './pizza-cloud9.service';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';// Prevent error 404
import {PizzaDescComponent} from './pizza-desc/pizza-desc.component';
import {PizzaCreateComponent} from './pizza-create/pizza-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {IngredientCloud9Service} from "./ingredient-cloud9.service";
import { PizzaDeleteComponent } from './pizza-delete/pizza-delete.component';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { IngredientCreateComponent } from './ingredient-create/ingredient-create.component';
import { IngredientDescComponent } from './ingredient-desc/ingredient-desc.component';
import { IngredientDeleteComponent } from './ingredient-delete/ingredient-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    IngredientComponent,
    PizzaDescComponent,
    PizzaCreateComponent,
    PizzaDeleteComponent,
    PizzaHomeComponent,
    IngredientCreateComponent,
    IngredientDescComponent,
    IngredientDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PizzaCloud9Service,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IngredientCloud9Service
  ], // Prevent error 404
  bootstrap: [AppComponent]
})
export class AppModule {
}
