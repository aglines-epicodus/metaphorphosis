import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConceptComponent } from './add-concept.component';

describe('AddConceptComponent', () => {
  let component: AddConceptComponent;
  let fixture: ComponentFixture<AddConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
