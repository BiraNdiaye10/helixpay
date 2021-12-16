import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerermesclientsComponent } from './gerermesclients.component';

describe('GerermesclientsComponent', () => {
  let component: GerermesclientsComponent;
  let fixture: ComponentFixture<GerermesclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerermesclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerermesclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
