import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedRegistryComponent } from './unified-registry.component';

describe('UnifiedRegistryComponent', () => {
  let component: UnifiedRegistryComponent;
  let fixture: ComponentFixture<UnifiedRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifiedRegistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnifiedRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
