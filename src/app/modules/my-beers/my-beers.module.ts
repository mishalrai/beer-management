import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBeersComponent } from './container/my-beers/my-beers.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'ui-ng';
import { AddNewModule } from 'ui-ng';
import { ButtonModule } from 'ui-ng';
import { AddBeerFormComponent } from './component/add-beer-form/add-beer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './component/modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: MyBeersComponent,
  },
];

@NgModule({
  declarations: [MyBeersComponent, AddBeerFormComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    AddNewModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class MyBeersModule {}
