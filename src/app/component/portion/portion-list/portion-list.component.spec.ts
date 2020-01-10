import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionListComponent } from './portion-list.component';

describe('PortionListComponent', () => {
  let component: PortionListComponent;
  let fixture: ComponentFixture<PortionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
