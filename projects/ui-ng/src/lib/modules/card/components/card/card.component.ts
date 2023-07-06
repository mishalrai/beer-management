import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../models/card.interface';
import { TooltipPosition } from '../../models/card.enum';
@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  item!: Card;

  @Input()
  public showActions: boolean = false;

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public tooltipPosition: TooltipPosition = TooltipPosition.Top;

  /**
   * Emit delete event on click delete option
   */
  public handleDelete() {
    if (this.item) {
      this.onDelete.emit(this.item.id);
    }
  }
}
