import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience000002Component } from './experience000002.component';

describe('Experience000002Component', () => {
  let component: Experience000002Component;
  let fixture: ComponentFixture<Experience000002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Experience000002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Experience000002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
