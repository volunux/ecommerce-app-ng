import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDeleteAllComponent } from './entry-delete-all.component';

describe('EntryDeleteAllComponent', () => {
  let component: EntryDeleteAllComponent;
  let fixture: ComponentFixture<EntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
