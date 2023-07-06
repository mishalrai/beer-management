import { Injectable } from '@angular/core';
import { ToastInfo } from '../model/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: ToastInfo[] = [];

  /**
   * Display toast in DOM
   */
  show(toastOption: ToastInfo): void {
    this.toasts.push(toastOption);
  }

  /**
   * Remove specific toast from DOM
   */
  remove(toast: ToastInfo): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  /**
   * Remove all toast from DOM
   */
  clear(): void {
    this.toasts.splice(0, this.toasts.length);
  }
}
