import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Department2ViewComponent } from './department2-view.component';

describe('Department2ViewComponent', () => {
  let component: Department2ViewComponent;
  let fixture: ComponentFixture<Department2ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Department2ViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Department2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
