import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FciComponent } from './fci.component';

describe('FciComponent', () => {
  let component: FciComponent;
  let fixture: ComponentFixture<FciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
