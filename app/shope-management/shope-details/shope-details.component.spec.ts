import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeDetailsComponent } from './shope-details.component';

describe('ShopeDetailsComponent', () => {
  let component: ShopeDetailsComponent;
  let fixture: ComponentFixture<ShopeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
