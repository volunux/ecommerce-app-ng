import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityOneIdComponent } from './entity-one-id.component';

describe('EntityOneIdComponent', () => {
  let component: EntityOneIdComponent;
  let fixture: ComponentFixture<EntityOneIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityOneIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityOneIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
