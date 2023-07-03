import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CardComponent, CardListComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardListComponent, NgbTooltipModule],
})
export class CardModule {}
