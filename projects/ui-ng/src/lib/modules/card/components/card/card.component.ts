import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.interface';
import { TooltipPosition } from '../../models/card.enum';
@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  item!: Card;

  @Input()
  public tooltipPosition: TooltipPosition = TooltipPosition.Top;

  constructor() {}

  ngOnInit(): void {}
}
