import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPresentComponent } from './song-present.component';

describe('SongPresentComponent', () => {
  let component: SongPresentComponent;
  let fixture: ComponentFixture<SongPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
