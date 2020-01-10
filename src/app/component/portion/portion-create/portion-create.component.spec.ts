import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionCreateComponent } from './portion-create.component';

describe('PortionCreateComponent', () => {
  let component: PortionCreateComponent;
  let fixture: ComponentFixture<PortionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
