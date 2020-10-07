import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPathComponent } from './card-path.component';

describe('CardPathComponent', () => {
  let component: CardPathComponent;
  let fixture: ComponentFixture<CardPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
