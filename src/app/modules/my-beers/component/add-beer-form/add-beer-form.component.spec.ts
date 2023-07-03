import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerFormComponent } from './add-beer-form.component';

describe('AddBeerFormComponent', () => {
  let component: AddBeerFormComponent;
  let fixture: ComponentFixture<AddBeerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBeerFormComponent],
    });
    fixture = TestBed.createComponent(AddBeerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
