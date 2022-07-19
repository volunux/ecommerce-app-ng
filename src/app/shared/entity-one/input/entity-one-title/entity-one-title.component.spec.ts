import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityOneTitleComponent } from './entity-one-title.component';

describe('EntityOneTitleComponent', () => {
  let component: EntityOneTitleComponent;
  let fixture: ComponentFixture<EntityOneTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityOneTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityOneTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
