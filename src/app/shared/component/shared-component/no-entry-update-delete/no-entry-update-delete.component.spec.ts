import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEntryUpdateDeleteComponent } from './no-entry-update-delete.component';

describe('NoEntryUpdateDeleteComponent', () => {
  let component: NoEntryUpdateDeleteComponent;
  let fixture: ComponentFixture<NoEntryUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEntryUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEntryUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
