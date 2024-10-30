import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiDataComponent } from './pii-data.component';

describe('PiiDataComponent', () => {
  let component: PiiDataComponent;
  let fixture: ComponentFixture<PiiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiiDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
