import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SftpComponent } from './sftp.component';

describe('SftpComponent', () => {
  let component: SftpComponent;
  let fixture: ComponentFixture<SftpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SftpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SftpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
