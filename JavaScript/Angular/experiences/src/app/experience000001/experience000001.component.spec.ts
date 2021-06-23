import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience000001Component } from './experience000001.component';

describe('Experience000001Component', () => {
  let component: Experience000001Component;
  let fixture: ComponentFixture<Experience000001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Experience000001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Experience000001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
