import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesMenuComponent } from './changes-menu.component';

describe('ChangesMenuComponent', () => {
  let component: ChangesMenuComponent;
  let fixture: ComponentFixture<ChangesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
