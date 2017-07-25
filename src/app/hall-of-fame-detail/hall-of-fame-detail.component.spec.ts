import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfFameDetailComponent } from './hall-of-fame-detail.component';

describe('HallOfFameDetailComponent', () => {
  let component: HallOfFameDetailComponent;
  let fixture: ComponentFixture<HallOfFameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallOfFameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfFameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
