import { TestBed, inject } from '@angular/core/testing';

import { IngredientCloud9Service } from './ingredient-cloud9.service';

describe('IngredientCloud9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientCloud9Service]
    });
  });

  it('should be created', inject([IngredientCloud9Service], (service: IngredientCloud9Service) => {
    expect(service).toBeTruthy();
  }));
});
