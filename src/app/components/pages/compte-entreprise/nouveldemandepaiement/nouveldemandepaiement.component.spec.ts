import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveldemandepaiementComponent } from './nouveldemandepaiement.component';

describe('NouveldemandepaiementComponent', () => {
  let component: NouveldemandepaiementComponent;
  let fixture: ComponentFixture<NouveldemandepaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveldemandepaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveldemandepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
