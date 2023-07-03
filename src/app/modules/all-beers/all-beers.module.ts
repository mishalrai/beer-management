import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBeersComponent } from './container/all-beers/all-beers.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'ui-ng';
import { CardModule } from 'ui-ng';

const routes: Routes = [
  {
    path: '',
    component: AllBeersComponent,
  },
];

@NgModule({
  declarations: [AllBeersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
  ],
})
export class AllBeersModule {}
