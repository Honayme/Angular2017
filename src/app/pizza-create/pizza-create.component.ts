import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaCloud9Service } from '../pizza-cloud9.service';
import { Pizza } from  '../pizza';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {

  createPizza = {};

  constructor(private route: Router, private pizzaCloud9Service: PizzaCloud9Service) { }

  ngOnInit() {
    this.pizzaCloud9Service.savePizza(this.createPizza)
      .subscribe(res => {
        this.createPizza  = res;
        console.log(this.createPizza );
      })
  }

}
