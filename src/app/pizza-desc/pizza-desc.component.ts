import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaCloud9Service } from '../pizza-cloud9.service';

@Component({
  selector: 'app-pizza-desc',
  templateUrl: './pizza-desc.component.html',
  styleUrls: ['./pizza-desc.component.css']
})
export class PizzaDescComponent implements OnInit {

  pizzaDesc = {};

  constructor(private route: ActivatedRoute, private pizzaCloud9Service: PizzaCloud9Service) { }

  ngOnInit() {
    this.pizzaCloud9Service.getPizzaById((this.route.snapshot.params['id']))
    // When pizza arrive on our data stream, set it equal to our local listPizza array.
      .subscribe(res => {
        this.pizzaDesc = res;
        console.log(this.pizzaDesc);
      })
    }

  // getPizzaDesc(id) {
  //   this.pizzaCloud9Service.showPizza(id).then((res) => {
  //     this.pizzaDesc = res;
  //     console.log(this.pizzaDesc);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

}

// https://www.djamware.com/post/58cf4e1c80aca72df8d1cf7e/tutorial-building-crud-app-from-scratch-using-mean-stack-angular-2
