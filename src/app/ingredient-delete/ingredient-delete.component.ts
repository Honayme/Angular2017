import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientCloud9Service} from '../ingredient-cloud9.service';


@Component({
  selector: 'app-ingredient-delete',
  templateUrl: './ingredient-delete.component.html',
  styleUrls: ['./ingredient-delete.component.css']
})

export class IngredientDeleteComponent implements OnInit {

  constructor(private serviceIngredient: IngredientCloud9Service, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.serviceIngredient.DeleteIngredient(id)
      .subscribe(res => {
        this.serviceIngredient = res;
        console.log((this.serviceIngredient));
      })
  }

}
