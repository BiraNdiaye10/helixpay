import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerducredittelephonikComponent } from './envoyerducredittelephonik.component';

describe('EnvoyerducredittelephonikComponent', () => {
  let component: EnvoyerducredittelephonikComponent;
  let fixture: ComponentFixture<EnvoyerducredittelephonikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerducredittelephonikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerducredittelephonikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
