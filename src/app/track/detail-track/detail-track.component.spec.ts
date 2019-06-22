import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrackComponent } from './detail-track.component';

describe('DetailTrackComponent', () => {
  let component: DetailTrackComponent;
  let fixture: ComponentFixture<DetailTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
