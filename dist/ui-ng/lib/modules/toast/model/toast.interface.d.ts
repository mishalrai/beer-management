import { ToastType } from './toast.enum';
export interface ToastInfo {
    body: string;
    type: ToastType;
    header?: string;
    delay?: number;
}
