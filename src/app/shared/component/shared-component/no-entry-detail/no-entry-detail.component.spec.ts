import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEntryDetailComponent } from './no-entry-detail.component';

describe('NoEntryDetailComponent', () => {
  let component: NoEntryDetailComponent;
  let fixture: ComponentFixture<NoEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
