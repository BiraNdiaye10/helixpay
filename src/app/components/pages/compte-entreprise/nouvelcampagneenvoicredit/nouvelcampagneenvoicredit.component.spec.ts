import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelcampagneenvoicreditComponent } from './nouvelcampagneenvoicredit.component';

describe('NouvelcampagneenvoicreditComponent', () => {
  let component: NouvelcampagneenvoicreditComponent;
  let fixture: ComponentFixture<NouvelcampagneenvoicreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelcampagneenvoicreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelcampagneenvoicreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
