import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'ui-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  /* Default time to hide the toast */
  public DEFAULT_DELAY_TITLE: number = 3000;

  constructor(public readonly toastService: ToastService) {}
}
