import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Album1Component } from './album1.component';

describe('Album1Component', () => {
  let component: Album1Component;
  let fixture: ComponentFixture<Album1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Album1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Album1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
