import { TemplateRef } from '@angular/core';
import { Card } from '../../models/card.interface';
import * as i0 from "@angular/core";
export declare class CardListComponent {
    items: Array<Card>;
    className: string;
    card: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardListComponent, "ui-card-list", never, { "items": { "alias": "items"; "required": false; }; "className": { "alias": "className"; "required": false; }; }, {}, ["card"], never, false, never>;
}
