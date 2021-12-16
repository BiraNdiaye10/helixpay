import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebourserdespaiementsComponent } from './debourserdespaiements.component';

describe('DebourserdespaiementsComponent', () => {
  let component: DebourserdespaiementsComponent;
  let fixture: ComponentFixture<DebourserdespaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebourserdespaiementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebourserdespaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
