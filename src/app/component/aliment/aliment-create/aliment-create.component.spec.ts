import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentCreateComponent } from './aliment-create.component';

describe('AlimentCreateComponent', () => {
  let component: AlimentCreateComponent;
  let fixture: ComponentFixture<AlimentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
