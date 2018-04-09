import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTrailsComponent } from './list-of-trails.component';

describe('ListOfTrailsComponent', () => {
  let component: ListOfTrailsComponent;
  let fixture: ComponentFixture<ListOfTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
