import { Component, OnInit } from '@angular/core';
import {IngredientCloud9Service} from '../ingredient-cloud9.service';
import {Ingredient} from './ingredient';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  listIngredient: any;

  constructor(private serviceIngredient: IngredientCloud9Service) { }

  ngOnInit() {
    this.serviceIngredient.get()
      .subscribe(res => {
        this.listIngredient = res;
        console.log((this.listIngredient));
      })
  }

}
