import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetailDateComponent } from './anime-detail-date.component';

describe('AnimeDetailDateComponent', () => {
  let component: AnimeDetailDateComponent;
  let fixture: ComponentFixture<AnimeDetailDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeDetailDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDetailDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
