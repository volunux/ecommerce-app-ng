import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityOneTitleValMsgComponent } from './entity-one-title-val-msg.component';

describe('EntityOneTitleValMsgComponent', () => {
  let component: EntityOneTitleValMsgComponent;
  let fixture: ComponentFixture<EntityOneTitleValMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityOneTitleValMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityOneTitleValMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
