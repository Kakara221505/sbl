import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Department2AddComponent } from './department2-add.component';

describe('Department2AddComponent', () => {
  let component: Department2AddComponent;
  let fixture: ComponentFixture<Department2AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Department2AddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Department2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
