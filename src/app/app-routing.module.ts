import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


// import { AppComponent } from "./app.component";
import {PizzaComponent} from './pizza/pizza.component';
import {IngredientComponent} from './ingredient/ingredient.component';
import {PizzaDescComponent} from './pizza-desc/pizza-desc.component';
import {PizzaCreateComponent} from './pizza-create/pizza-create.component';
import {PizzaDeleteComponent} from './pizza-delete/pizza-delete.component';
import {PizzaHomeComponent} from './pizza-home/pizza-home.component';
import {IngredientCreateComponent} from './ingredient-create/ingredient-create.component';
import {IngredientDescComponent} from './ingredient-desc/ingredient-desc.component';
import {IngredientDeleteComponent} from './ingredient-delete/ingredient-delete.component';


const routes: Routes = [
  {path: '', redirectTo: 'pizzahome', pathMatch: 'full'},
  {path: 'pizzahome', component: PizzaHomeComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'pizza/create', component: PizzaCreateComponent},
  {path: 'pizza/update/:id', component: PizzaCreateComponent},
  {path: 'pizza/desc/:id', component: PizzaDescComponent},
  {path: 'pizza/delete/:id', component: PizzaDeleteComponent},
  {path: 'ingredient', component: IngredientComponent},
  {path: 'ingredient/create', component: IngredientCreateComponent},
  {path: 'ingredient/update/:id', component: IngredientCreateComponent},
  {path: 'ingredient/desc/:id', component: IngredientDescComponent},
  {path: 'ingredient/delete/:id', component: IngredientDeleteComponent}
];

// export const routeur: ModuleWithProviders = RouterModule.forRoot(router)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
