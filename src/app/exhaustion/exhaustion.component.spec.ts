import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustionComponent } from './exhaustion.component';

describe('ExhaustionComponent', () => {
  let component: ExhaustionComponent;
  let fixture: ComponentFixture<ExhaustionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhaustionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhaustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
