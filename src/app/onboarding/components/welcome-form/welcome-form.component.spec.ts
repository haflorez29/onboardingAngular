import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFormComponent } from './welcome-form.component';

describe('WelcomeFormComponent', () => {
  let component: WelcomeFormComponent;
  let fixture: ComponentFixture<WelcomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
