import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaerAddComponent } from './uaer-add.component';

describe('UaerAddComponent', () => {
  let component: UaerAddComponent;
  let fixture: ComponentFixture<UaerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
