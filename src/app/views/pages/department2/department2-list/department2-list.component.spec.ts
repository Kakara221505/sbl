import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Department2ListComponent } from './department2-list.component';

describe('Department2ListComponent', () => {
  let component: Department2ListComponent;
  let fixture: ComponentFixture<Department2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Department2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Department2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
