import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AddNewComponent {
    onAddNew: EventEmitter<void>;
    /**
     * Emit onAddNew event when click on Click here link
     */
    handleClick($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddNewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddNewComponent, "ui-add-new", never, {}, { "onAddNew": "onAddNew"; }, never, never, false, never>;
}
