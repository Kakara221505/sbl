import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Department2EditComponent } from './department2-edit.component';

describe('Department2EditComponent', () => {
  let component: Department2EditComponent;
  let fixture: ComponentFixture<Department2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Department2EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Department2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
