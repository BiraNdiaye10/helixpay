import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerermaboutiqueComponent } from './gerermaboutique.component';

describe('GerermaboutiqueComponent', () => {
  let component: GerermaboutiqueComponent;
  let fixture: ComponentFixture<GerermaboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerermaboutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerermaboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
