import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesmsComponent } from './comptesms.component';

describe('ComptesmsComponent', () => {
  let component: ComptesmsComponent;
  let fixture: ComponentFixture<ComptesmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptesmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
