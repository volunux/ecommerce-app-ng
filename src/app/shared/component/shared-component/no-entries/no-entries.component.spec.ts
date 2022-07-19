import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEntriesComponent } from './no-entries.component';

describe('NoEntriesComponent', () => {
  let component: NoEntriesComponent;
  let fixture: ComponentFixture<NoEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
