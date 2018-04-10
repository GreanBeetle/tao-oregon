import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReportComponent } from './write-report.component';

describe('WriteReportComponent', () => {
  let component: WriteReportComponent;
  let fixture: ComponentFixture<WriteReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
