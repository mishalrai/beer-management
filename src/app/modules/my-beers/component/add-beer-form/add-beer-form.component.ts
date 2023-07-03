import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Card } from 'projects/ui-ng/src/public-api';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss'],
})
export class AddBeerFormComponent {
  @Input()
  public imgUrl: string = 'https://images.punkapi.com/v2/2.png';

  @Output()
  public onSubmit: EventEmitter<Card> = new EventEmitter<Card>();

  @Output()
  public onCancel: EventEmitter<void> = new EventEmitter<void>();

  public form!: FormGroup;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  /**
   * Handle the form submit event if form is valid then
   * emit those data to parent element
   */
  public handleSubmit(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const newBeer: Card = {
        name: formValue.name,
        image_url: '',
        tagline: formValue.genre,
        description: formValue.description,
      };
      this.onSubmit.emit(newBeer);
    }
  }

  public handleCancel($event: Event): void {
    $event.preventDefault();
    this.onCancel.emit();
  }
}
