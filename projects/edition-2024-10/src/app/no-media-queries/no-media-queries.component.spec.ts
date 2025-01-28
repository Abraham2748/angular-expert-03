import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMediaQueriesComponent } from './no-media-queries.component';

describe('NoMediaQueriesComponent', () => {
  let component: NoMediaQueriesComponent;
  let fixture: ComponentFixture<NoMediaQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoMediaQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoMediaQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
