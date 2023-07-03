import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  item!: Card;

  constructor() {}

  ngOnInit(): void {}
}
