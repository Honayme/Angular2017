import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzaCloud9Service} from '../pizza-cloud9.service';
import {Pizza} from '../pizza/pizza';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../ingredient/ingredient';
import {IngredientCloud9Service} from '../ingredient-cloud9.service';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})
export class IngredientCreateComponent implements OnInit {
  ingredientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    weight: new FormControl('', Validators.required),
  });

  ingredient : Ingredient;
  modeUpdate = false;

  constructor(private route: ActivatedRoute,
              private pizzaCloud9Service: PizzaCloud9Service,
              private ingredientService: IngredientCloud9Service,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.ingredient = new Ingredient('', '', '');

    if (id) {
      this.modeUpdate = true;
      this.ingredientService.getIngredientById(id).subscribe(
        (res: any) => {
          this.ingredient._id = res._id;
          this.ingredientForm.patchValue(res);
          // this.pizza = res.pizza_ids;
        })
    }
  }

  saveIngredient() {
    this.ingredient = Object.assign(this.ingredient, this.ingredientForm.value);

    if (!this.modeUpdate) {
      this.ingredientService.saveIngredient(this.ingredient)
        .subscribe(res => {
          this.router.navigate(['ingredient'])
        })
    } else {
      this.ingredientService.updateIngredient(this.ingredient).subscribe(res => {
        this.router.navigate(['ingredient'])
      })
    }
  }

}
