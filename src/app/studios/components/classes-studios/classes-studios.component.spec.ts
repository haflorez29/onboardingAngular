import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesStudiosComponent } from './classes-studios.component';

describe('ClassesStudiosComponent', () => {
  let component: ClassesStudiosComponent;
  let fixture: ComponentFixture<ClassesStudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesStudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
