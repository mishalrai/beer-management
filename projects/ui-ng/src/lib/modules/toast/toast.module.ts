import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, NgbToastModule],
  exports: [ToastComponent],
})
export class ToastModule {}
