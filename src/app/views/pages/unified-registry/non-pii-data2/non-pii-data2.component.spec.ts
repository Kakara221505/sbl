import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPiiData2Component } from './non-pii-data2.component';

describe('NonPiiData2Component', () => {
  let component: NonPiiData2Component;
  let fixture: ComponentFixture<NonPiiData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonPiiData2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonPiiData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
