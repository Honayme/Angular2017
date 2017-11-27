import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IngredientCloud9Service} from '../ingredient-cloud9.service';

@Component({
  selector: 'app-ingredient-desc',
  templateUrl: './ingredient-desc.component.html',
  styleUrls: ['./ingredient-desc.component.css']
})
export class IngredientDescComponent implements OnInit {

  ingredientDesc = {};

  constructor(private route: ActivatedRoute,
              private ingredientService: IngredientCloud9Service) {
  }

  ngOnInit() {
    this.ingredientService.getIngredientById(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.ingredientDesc = res;
        console.log(this.ingredientDesc);
      })
  }

}
