import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecterdespaiementsComponent } from './collecterdespaiements.component';

describe('CollecterdespaiementsComponent', () => {
  let component: CollecterdespaiementsComponent;
  let fixture: ComponentFixture<CollecterdespaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollecterdespaiementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollecterdespaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
