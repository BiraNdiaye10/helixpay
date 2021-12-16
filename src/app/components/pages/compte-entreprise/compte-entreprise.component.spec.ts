import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEntrepriseComponent } from './compte-entreprise.component';

describe('CompteEntrepriseComponent', () => {
  let component: CompteEntrepriseComponent;
  let fixture: ComponentFixture<CompteEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
