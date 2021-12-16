import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderpaiementComponent } from './demanderpaiement.component';

describe('DemanderpaiementComponent', () => {
  let component: DemanderpaiementComponent;
  let fixture: ComponentFixture<DemanderpaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderpaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderpaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
