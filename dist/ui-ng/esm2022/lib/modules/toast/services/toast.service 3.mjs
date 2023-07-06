import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastService {
    constructor() {
        this.toasts = [];
    }
    /**
     * Display toast in DOM
     */
    show(toastOption) {
        this.toasts.push(toastOption);
    }
    /**
     * Remove specific toast from DOM
     */
    remove(toast) {
        this.toasts = this.toasts.filter((t) => t !== toast);
    }
    /**
     * Remove all toast from DOM
     */
    clear() {
        this.toasts.splice(0, this.toasts.length);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLW5nL3NyYy9saWIvbW9kdWxlcy90b2FzdC9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxZQUFZO0lBSHpCO1FBSUUsV0FBTSxHQUFnQixFQUFFLENBQUM7S0FzQjFCO0lBcEJDOztPQUVHO0lBQ0gsSUFBSSxDQUFDLFdBQXNCO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxLQUFnQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7OEdBdEJVLFlBQVk7a0hBQVosWUFBWSxjQUZYLE1BQU07OzJGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RJbmZvIH0gZnJvbSAnLi4vbW9kZWwvdG9hc3QuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG4gIHRvYXN0czogVG9hc3RJbmZvW10gPSBbXTtcblxuICAvKipcbiAgICogRGlzcGxheSB0b2FzdCBpbiBET01cbiAgICovXG4gIHNob3codG9hc3RPcHRpb246IFRvYXN0SW5mbyk6IHZvaWQge1xuICAgIHRoaXMudG9hc3RzLnB1c2godG9hc3RPcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBzcGVjaWZpYyB0b2FzdCBmcm9tIERPTVxuICAgKi9cbiAgcmVtb3ZlKHRvYXN0OiBUb2FzdEluZm8pOiB2b2lkIHtcbiAgICB0aGlzLnRvYXN0cyA9IHRoaXMudG9hc3RzLmZpbHRlcigodCkgPT4gdCAhPT0gdG9hc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgdG9hc3QgZnJvbSBET01cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3RzLnNwbGljZSgwLCB0aGlzLnRvYXN0cy5sZW5ndGgpO1xuICB9XG59XG4iXX0=