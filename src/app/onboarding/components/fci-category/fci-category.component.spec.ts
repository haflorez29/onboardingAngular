import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FciCategoryComponent } from './fci-category.component';

describe('FciCategoryComponent', () => {
  let component: FciCategoryComponent;
  let fixture: ComponentFixture<FciCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FciCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FciCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
