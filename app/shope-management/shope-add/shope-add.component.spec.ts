import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeAddComponent } from './shope-add.component';

describe('ShopeAddComponent', () => {
  let component: ShopeAddComponent;
  let fixture: ComponentFixture<ShopeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
