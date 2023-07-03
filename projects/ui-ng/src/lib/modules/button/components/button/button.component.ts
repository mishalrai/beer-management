import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public buttonType: string = '';

  @Input()
  public disabled: boolean = false;

  @Output()
  public onClicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  /**
   * Handle button mouse click event. [Just emit clicked event to parent component]
   */
  public handleClick($event: MouseEvent): void {
    if (!this.disabled) {
      this.onClicked.emit($event);
    }
  }
}
