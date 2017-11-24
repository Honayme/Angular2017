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
      .subscribe(res => {
        this.pizzaDesc = res;
        console.log(this.pizzaDesc);
      })
    }
}


