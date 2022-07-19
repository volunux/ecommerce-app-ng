import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityOneDescriptionValMsgComponent } from './entity-one-description-val-msg.component';

describe('EntityOneDescriptionValMsgComponent', () => {
  let component: EntityOneDescriptionValMsgComponent;
  let fixture: ComponentFixture<EntityOneDescriptionValMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityOneDescriptionValMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityOneDescriptionValMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
