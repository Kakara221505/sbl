import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SftpListComponent } from './sftp-list.component';

describe('SftpListComponent', () => {
  let component: SftpListComponent;
  let fixture: ComponentFixture<SftpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SftpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SftpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
