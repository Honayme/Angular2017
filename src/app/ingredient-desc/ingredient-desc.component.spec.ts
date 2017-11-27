import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDescComponent } from './ingredient-desc.component';

describe('IngredientDescComponent', () => {
  let component: IngredientDescComponent;
  let fixture: ComponentFixture<IngredientDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
