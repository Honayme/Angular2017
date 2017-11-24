import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDescComponent } from './pizza-desc.component';

describe('PizzaDescComponent', () => {
  let component: PizzaDescComponent;
  let fixture: ComponentFixture<PizzaDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
