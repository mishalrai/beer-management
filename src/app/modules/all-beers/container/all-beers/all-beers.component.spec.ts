import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBeersComponent } from './all-beers.component';

describe('AllBeersComponent', () => {
  let component: AllBeersComponent;
  let fixture: ComponentFixture<AllBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBeersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
