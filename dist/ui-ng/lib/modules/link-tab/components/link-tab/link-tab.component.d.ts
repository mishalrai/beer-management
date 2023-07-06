import { LinkTab } from '../../model/link-tab.interface';
import * as i0 from "@angular/core";
export declare class LinkTabComponent {
    items: Array<LinkTab>;
    /**
     *  Activate recently clicked tab and deactivate others tabs
     */
    handleClick($event: LinkTab): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkTabComponent, "ui-link-tab", never, { "items": { "alias": "items"; "required": false; }; }, {}, never, never, false, never>;
}
