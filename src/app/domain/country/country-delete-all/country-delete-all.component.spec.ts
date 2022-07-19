import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDeleteAllComponent } from './country-delete-all.component';

describe('CountryDeleteAllComponent', () => {
  let component: CountryDeleteAllComponent;
  let fixture: ComponentFixture<CountryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
