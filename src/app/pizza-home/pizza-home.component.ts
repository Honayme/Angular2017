import { Component, OnInit } from '@angular/core';

import {PizzaCloud9Service} from '../pizza-cloud9.service';
import {Pizza} from '../pizza/pizza';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css']
})
export class PizzaHomeComponent implements OnInit {
  title = 'Pizza Mafiosi';
  listPizza: any;

  constructor(private servicePizza: PizzaCloud9Service) {
  }

  ngOnInit() {
    this.servicePizza.get()
      .subscribe(res => {
        this.listPizza = res;
        console.log((this.listPizza));
      })
  }
}
