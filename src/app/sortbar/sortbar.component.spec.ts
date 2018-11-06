import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbarComponent } from './sortbar.component';

describe('SortbarComponent', () => {
  let component: SortbarComponent;
  let fixture: ComponentFixture<SortbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
