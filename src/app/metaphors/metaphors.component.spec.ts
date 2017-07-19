import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaphorsComponent } from './metaphors.component';

describe('MetaphorsComponent', () => {
  let component: MetaphorsComponent;
  let fixture: ComponentFixture<MetaphorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaphorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaphorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
