import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEntriesComponent } from './country-entries.component';

describe('CountryEntriesComponent', () => {
  let component: CountryEntriesComponent;
  let fixture: ComponentFixture<CountryEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
