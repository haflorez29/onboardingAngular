import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPersonComponent } from './key-person.component';

describe('KeyPersonComponent', () => {
  let component: KeyPersonComponent;
  let fixture: ComponentFixture<KeyPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
