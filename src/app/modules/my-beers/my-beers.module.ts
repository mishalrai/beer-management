import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './component/modal/modal.component';

/* Components */
import { ButtonModule, CardModule, AddNewModule, LoaderModule } from 'ui-ng';
import { MyBeersComponent } from './container/my-beers/my-beers.component';
import { AddBeerFormComponent } from './component/add-beer-form/add-beer-form.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

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
    LoaderModule,
    NgbToastModule,
  ],
})
export class MyBeersModule {}
