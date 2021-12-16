import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslespartenairesIntegrateursComponent } from './touslespartenaires-integrateurs.component';

describe('TouslespartenairesIntegrateursComponent', () => {
  let component: TouslespartenairesIntegrateursComponent;
  let fixture: ComponentFixture<TouslespartenairesIntegrateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouslespartenairesIntegrateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslespartenairesIntegrateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
