import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpRowComponent } from './line-up-row.component';

describe('LineUpRowComponent', () => {
  let component: LineUpRowComponent;
  let fixture: ComponentFixture<LineUpRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineUpRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
