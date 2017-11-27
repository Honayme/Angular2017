import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzaCloud9Service} from '../pizza-cloud9.service';
import {Pizza} from '../pizza/pizza';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../ingredient/ingredient';
import {IngredientCloud9Service} from '../ingredient-cloud9.service';


@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PizzaCreateComponent implements OnInit {
  pizzaForm = new FormGroup({
    name: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
  });

  pizza: Pizza;
  modeUpdate = false;
  image = "";
  ingredients: Ingredient[] = [];
  pizzaIngredients: Ingredient[] = [];

  constructor(private route: ActivatedRoute,
              private pizzaCloud9Service: PizzaCloud9Service,
              private ingredientCloud9Service: IngredientCloud9Service,
              private router: Router) {
  }

  ngOnInit() {
    this.ingredientCloud9Service.get().subscribe(
      res => this.ingredients = res
    );

    const id = this.route.snapshot.params['id'];
    this.pizza = new Pizza('', '', '', '', []);

    if (id) {
      this.modeUpdate = true;
      this.pizzaCloud9Service.getPizzaById(id).subscribe(
        (res: any) => {
          this.pizza._id = res._id;
          this.pizzaForm.patchValue(res);
          this.pizzaIngredients = res.ingredient_ids;
          this.image = res.picture;
        })
    }

  }

  savePizza() {
    this.pizza = Object.assign(this.pizza, this.pizzaForm.value);
    this.pizzaIngredients.forEach((ingredient: Ingredient) => this.pizza.ingredient_ids.push(ingredient._id));
    this.pizza.picture = this.image;
    if (!this.modeUpdate) {

      this.pizzaCloud9Service.savePizza(this.pizza)
        .subscribe(res => {
          this.router.navigate(['pizza'])
        })
    } else {
      this.pizzaCloud9Service.updatePizza(this.pizza).subscribe(res => {
        this.router.navigate(['pizza'])
      })
    }
  }

  //INGREDIENT
  addIngredient(ingredient: Ingredient) {
    console.log(this.ingredients)
    console.log(this.pizzaIngredients)
    let found = false;

    for (const i in this.pizzaIngredients) {
      if (this.pizzaIngredients[i]._id === ingredient._id) {
        found = true;
        this.pizzaIngredients.splice(+i, 1);
        break;
      }
    }

    if (!found) {
      this.pizzaIngredients.push(ingredient);
    }

  }

  //IMAGE
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(this.image);
    }
    myReader.readAsDataURL(file);

  }
}
