import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Card } from 'ui-ng';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss'],
})
export class AddBeerFormComponent {
  @Input()
  public imgUrl: string = '';

  @Input()
  public disabledSubmitButton: boolean =
    false; /* Enable or Disable form submit button */

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
    if (this.form.valid && !this.disabledSubmitButton) {
      const formValue = this.form.value;
      const tagline = this.sanitizeInput(formValue.genre);
      const newBeer: Card = {
        id: new Date().getTime(),
        name: this.sanitizeInput(formValue.name),
        image_url: this.imgUrl,
        tagline: tagline,
        description: this.sanitizeInput(formValue.description),
        tooltipText: tagline,
      };
      this.onSubmit.emit(newBeer);
    }
  }

  /**
   * Sanitize input string [Remove unwanted characters]
   */
  public sanitizeInput(input: string): string {
    return input.replace(/[^\w\s]/gi, '');
  }

  /**
   * Emit the cancel event for parent
   */
  public handleCancel($event: Event): void {
    $event.preventDefault();
    this.onCancel.emit();
  }
}
