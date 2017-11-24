import { TestBed, inject } from '@angular/core/testing';

import { PizzaCloud9Service } from './pizza-cloud9.service';

describe('PizzaCloud9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaCloud9Service]
    });
  });

  it('should be created', inject([PizzaCloud9Service], (service: PizzaCloud9Service) => {
    expect(service).toBeTruthy();
  }));
});
