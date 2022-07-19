import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityOneDescriptionComponent } from './entity-one-description.component';

describe('EntityOneDescriptionComponent', () => {
  let component: EntityOneDescriptionComponent;
  let fixture: ComponentFixture<EntityOneDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityOneDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityOneDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
