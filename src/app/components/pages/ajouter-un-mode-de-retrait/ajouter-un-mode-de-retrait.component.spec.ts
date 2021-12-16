import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnModeDeRetraitComponent } from './ajouter-un-mode-de-retrait.component';

describe('AjouterUnModeDeRetraitComponent', () => {
  let component: AjouterUnModeDeRetraitComponent;
  let fixture: ComponentFixture<AjouterUnModeDeRetraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUnModeDeRetraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnModeDeRetraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
