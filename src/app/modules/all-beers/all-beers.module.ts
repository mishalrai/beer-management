import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBeersRoutingModule } from './all-beers-routing.module';

/* Components */
import { AllBeersComponent } from './container/all-beers/all-beers.component';
import { ButtonModule, CardModule, LoaderModule, NoDataModule } from 'ui-ng';
@NgModule({
  declarations: [AllBeersComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    AllBeersRoutingModule,
    LoaderModule,
    NoDataModule,
  ],
})
export class AllBeersModule {}
