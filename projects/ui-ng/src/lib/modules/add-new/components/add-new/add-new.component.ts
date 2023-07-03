import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent {
  @Output()
  public onAddNew: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emit onAddNew event when click on Click here link
   */
  public handleClick($event: Event) {
    $event.preventDefault();
    this.onAddNew.emit();
  }
}
