import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
    constructor() {
        this.buttonType = '';
        this.disabled = false;
        this.onClicked = new EventEmitter();
    }
    /**
     * Handle button mouse click event. [Just emit clicked event to parent component]
     */
    handleClick($event) {
        if (!this.disabled) {
            this.onClicked.emit($event);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: ButtonComponent, selector: "ui-button", inputs: { buttonType: "buttonType", disabled: "disabled" }, outputs: { onClicked: "onClicked" }, ngImport: i0, template: "<button\n  [type]=\"buttonType\"\n  (click)=\"handleClick($event)\"\n  [class.disabled]=\"disabled\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [":host button{padding:0 12px;height:40px;border-radius:4px;border:none;background:transparent;cursor:pointer}:host.ui-button-text button.disabled,:host.ui-button button.disabled{cursor:not-allowed}:host.ui-button button{background-color:#3866b7;color:#fff;transition:.2s linear}:host.ui-button button.disabled{background-color:#e1e1e1;color:#bbb}:host.ui-button button:not(.disabled){border:1px solid #ccd9ef}:host.ui-button button:not(.disabled):hover{background-color:#325ba3}:host.ui-button-text.default button{color:#595959}:host.ui-button-text.default button svg{fill:#595959}:host.ui-button-text.primary button{color:#3866b7}:host.ui-button-text.primary button svg{fill:#3866b7}:host.ui-button-text button{background:transparent}:host.ui-button-text button.disabled{color:#bfbfbf}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-button', template: "<button\n  [type]=\"buttonType\"\n  (click)=\"handleClick($event)\"\n  [class.disabled]=\"disabled\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [":host button{padding:0 12px;height:40px;border-radius:4px;border:none;background:transparent;cursor:pointer}:host.ui-button-text button.disabled,:host.ui-button button.disabled{cursor:not-allowed}:host.ui-button button{background-color:#3866b7;color:#fff;transition:.2s linear}:host.ui-button button.disabled{background-color:#e1e1e1;color:#bbb}:host.ui-button button:not(.disabled){border:1px solid #ccd9ef}:host.ui-button button:not(.disabled):hover{background-color:#325ba3}:host.ui-button-text.default button{color:#595959}:host.ui-button-text.default button svg{fill:#595959}:host.ui-button-text.primary button{color:#3866b7}:host.ui-button-text.primary button svg{fill:#3866b7}:host.ui-button-text button{background:transparent}:host.ui-button-text button.disabled{color:#bfbfbf}\n"] }]
        }], propDecorators: { buttonType: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onClicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLW5nL3NyYy9saWIvbW9kdWxlcy9idXR0b24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLW5nL3NyYy9saWIvbW9kdWxlcy9idXR0b24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBT1MsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUd4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLGNBQVMsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQVU3RTtJQVJDOztPQUVHO0lBQ0ksV0FBVyxDQUFDLE1BQWtCO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs4R0FqQlUsZUFBZTtrR0FBZixlQUFlLGtKQ2I1QixtSkFPQTs7MkZETWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxXQUFXOzhCQU1kLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsUUFBUTtzQkFEZCxLQUFLO2dCQUlDLFNBQVM7c0JBRGYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGJ1dHRvblR5cGU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBidXR0b24gbW91c2UgY2xpY2sgZXZlbnQuIFtKdXN0IGVtaXQgY2xpY2tlZCBldmVudCB0byBwYXJlbnQgY29tcG9uZW50XVxuICAgKi9cbiAgcHVibGljIGhhbmRsZUNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vbkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxuICBbdHlwZV09XCJidXR0b25UeXBlXCJcbiAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==