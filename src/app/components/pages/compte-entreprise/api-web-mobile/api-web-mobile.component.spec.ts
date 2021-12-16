import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWebMobileComponent } from './api-web-mobile.component';

describe('ApiWebMobileComponent', () => {
  let component: ApiWebMobileComponent;
  let fixture: ComponentFixture<ApiWebMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWebMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiWebMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
