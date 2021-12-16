import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfereargentComponent } from './transfereargent.component';

describe('TransfereargentComponent', () => {
  let component: TransfereargentComponent;
  let fixture: ComponentFixture<TransfereargentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfereargentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfereargentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
