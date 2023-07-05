import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyBeersComponent } from './container/my-beers/my-beers.component';

const routes: Routes = [
  {
    path: '',
    component: MyBeersComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBeersRoutingModule {}
