/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TripstatComponent } from './tripstat.component';

describe('TripstatComponent', () => {
  let component: TripstatComponent;
  let fixture: ComponentFixture<TripstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
