import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    buttonType: string;
    disabled: boolean;
    onClicked: EventEmitter<MouseEvent>;
    /**
     * Handle button mouse click event. [Just emit clicked event to parent component]
     */
    handleClick($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "ui-button", never, { "buttonType": { "alias": "buttonType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onClicked": "onClicked"; }, never, ["*"], false, never>;
}
