import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPiiData1Component } from './non-pii-data1.component';

describe('NonPiiData1Component', () => {
  let component: NonPiiData1Component;
  let fixture: ComponentFixture<NonPiiData1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonPiiData1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonPiiData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
