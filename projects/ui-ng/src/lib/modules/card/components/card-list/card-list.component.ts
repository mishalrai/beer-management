import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Card } from '../../models/card.interface';
@Component({
  selector: 'ui-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input()
  public items: Array<Card> = [];

  @Input()
  className: string = '';

  @ContentChild('card') card!: TemplateRef<any>;
}
