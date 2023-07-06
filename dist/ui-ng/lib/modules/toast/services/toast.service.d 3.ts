import { ToastInfo } from '../model/toast.interface';
import * as i0 from "@angular/core";
export declare class ToastService {
    toasts: ToastInfo[];
    /**
     * Display toast in DOM
     */
    show(toastOption: ToastInfo): void;
    /**
     * Remove specific toast from DOM
     */
    remove(toast: ToastInfo): void;
    /**
     * Remove all toast from DOM
     */
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
