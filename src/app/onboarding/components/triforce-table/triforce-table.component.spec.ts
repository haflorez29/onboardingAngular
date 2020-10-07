import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriforceTableComponent } from './triforce-table.component';

describe('TriforceTableComponent', () => {
  let component: TriforceTableComponent;
  let fixture: ComponentFixture<TriforceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriforceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriforceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
