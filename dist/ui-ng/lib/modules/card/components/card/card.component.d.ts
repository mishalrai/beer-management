import { EventEmitter } from '@angular/core';
import { Card } from '../../models/card.interface';
import { TooltipPosition } from '../../models/card.enum';
import * as i0 from "@angular/core";
export declare class CardComponent {
    item: Card;
    showActions: boolean;
    onDelete: EventEmitter<number>;
    tooltipPosition: TooltipPosition;
    /**
     * Emit delete event on click delete option
     */
    handleDelete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "ui-card", never, { "item": { "alias": "item"; "required": false; }; "showActions": { "alias": "showActions"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; }, { "onDelete": "onDelete"; }, never, never, false, never>;
}
