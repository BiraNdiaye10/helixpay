import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondesrolesComponent } from './gestiondesroles.component';

describe('GestiondesrolesComponent', () => {
  let component: GestiondesrolesComponent;
  let fixture: ComponentFixture<GestiondesrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondesrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondesrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
