import { RouterModule, Routes } from '@angular/router';
import { AllBeersComponent } from './container/all-beers/all-beers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AllBeersComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBeersRoutingModule {}
