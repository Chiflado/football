import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEventInfoComponent } from './match-event-info.component';

describe('MatchEventInfoComponent', () => {
  let component: MatchEventInfoComponent;
  let fixture: ComponentFixture<MatchEventInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEventInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
