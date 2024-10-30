import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInferenceComponent } from './data-inference.component';

describe('DataInferenceComponent', () => {
  let component: DataInferenceComponent;
  let fixture: ComponentFixture<DataInferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
