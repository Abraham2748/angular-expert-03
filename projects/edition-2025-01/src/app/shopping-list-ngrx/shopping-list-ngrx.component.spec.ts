import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListNgrxComponent } from './shopping-list-ngrx.component';

describe('ShoppingListNgrxComponent', () => {
  let component: ShoppingListNgrxComponent;
  let fixture: ComponentFixture<ShoppingListNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
