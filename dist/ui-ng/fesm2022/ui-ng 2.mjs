import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ContentChild, NgModule, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import * as i2$1 from '@angular/router';
import { RouterModule } from '@angular/router';

var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["Top"] = "top";
    TooltipPosition["Bottom"] = "bottom";
    TooltipPosition["Start"] = "start";
    TooltipPosition["End"] = "end";
})(TooltipPosition || (TooltipPosition = {}));

class CardComponent {
    constructor() {
        this.showActions = false;
        this.onDelete = new EventEmitter();
        this.tooltipPosition = TooltipPosition.Top;
    }
    /**
     * Emit delete event on click delete option
     */
    handleDelete() {
        if (this.item) {
            this.onDelete.emit(this.item.id);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: CardComponent, selector: "ui-card", inputs: { item: "item", showActions: "showActions", tooltipPosition: "tooltipPosition" }, outputs: { onDelete: "onDelete" }, ngImport: i0, template: "<div class=\"ui-card\" *ngIf=\"item\">\n  <div\n    class=\"ui-card__image\"\n    *ngIf=\"item.image_url\"\n    [placement]=\"tooltipPosition\"\n    ngbTooltipClass=\"card-tooltip\"\n    [ngbTooltip]=\"item?.tooltipText\"\n  >\n    <img [src]=\"item.image_url\" alt=\"Beer image\" height=\"100\" />\n  </div>\n\n  <div class=\"ui-card__wrapper\">\n    <div class=\"ui-card__description\">\n      <h3 class=\"ui-card__name\" *ngIf=\"item.name\">{{ item.name }}</h3>\n      <!-- Category -->\n      <div class=\"ui-card__category\" *ngIf=\"item.tagline\">\n        {{ item.tagline }}\n      </div>\n      <!-- Description -->\n      <div class=\"ui-card__description\" *ngIf=\"item.description\">\n        {{ item.description }}\n      </div>\n    </div>\n\n    <!-- Actions -->\n    <div class=\"ui-card__actions\" *ngIf=\"showActions\">\n      <button\n        [placement]=\"tooltipPosition\"\n        ngbTooltipClass=\"card-tooltip\"\n        [ngbTooltip]=\"'Delete'\"\n        class=\"ui-card__delete\"\n        (click)=\"handleDelete()\"\n      >\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"20\"\n          height=\"20\"\n          fill=\"currentColor\"\n          class=\"bi bi-x-lg\"\n          viewBox=\"0 0 16 16\"\n        >\n          <path\n            d=\"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z\"\n          />\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n", styles: [".ui-card__description,.ui-card__category{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.ui-card{box-shadow:0 0 16px #2223;padding:32px 16px;display:flex;border-radius:4px;transition:all .2s;cursor:pointer}.ui-card:hover{background-color:#f3f6fb}.ui-card__wrapper{margin-left:16px;display:flex;flex-grow:1}.ui-card__description{flex-grow:1}.ui-card__image{width:80px;display:flex;flex:0 0 auto;align-items:center;justify-content:center}.ui-card__name{color:#222;margin-bottom:8px;font-size:20px}.ui-card__category{color:#cb9b42;margin-bottom:8px;-webkit-line-clamp:1}.ui-card__description{color:#595959;-webkit-line-clamp:2}.ui-card__actions{display:flex;align-items:center;margin-top:-8px}.ui-card__delete{border:none;background:transparent}.ui-card__delete:hover svg{fill:#222}.ui-card__delete svg{fill:#595959}::ng-deep ngb-tooltip-window{max-width:125px}::ng-deep ngb-tooltip-window *{text-align:left!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgbTooltip, selector: "[ngbTooltip]", inputs: ["animation", "autoClose", "placement", "popperOptions", "triggers", "positionTarget", "container", "disableTooltip", "tooltipClass", "openDelay", "closeDelay", "ngbTooltip"], outputs: ["shown", "hidden"], exportAs: ["ngbTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-card', template: "<div class=\"ui-card\" *ngIf=\"item\">\n  <div\n    class=\"ui-card__image\"\n    *ngIf=\"item.image_url\"\n    [placement]=\"tooltipPosition\"\n    ngbTooltipClass=\"card-tooltip\"\n    [ngbTooltip]=\"item?.tooltipText\"\n  >\n    <img [src]=\"item.image_url\" alt=\"Beer image\" height=\"100\" />\n  </div>\n\n  <div class=\"ui-card__wrapper\">\n    <div class=\"ui-card__description\">\n      <h3 class=\"ui-card__name\" *ngIf=\"item.name\">{{ item.name }}</h3>\n      <!-- Category -->\n      <div class=\"ui-card__category\" *ngIf=\"item.tagline\">\n        {{ item.tagline }}\n      </div>\n      <!-- Description -->\n      <div class=\"ui-card__description\" *ngIf=\"item.description\">\n        {{ item.description }}\n      </div>\n    </div>\n\n    <!-- Actions -->\n    <div class=\"ui-card__actions\" *ngIf=\"showActions\">\n      <button\n        [placement]=\"tooltipPosition\"\n        ngbTooltipClass=\"card-tooltip\"\n        [ngbTooltip]=\"'Delete'\"\n        class=\"ui-card__delete\"\n        (click)=\"handleDelete()\"\n      >\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"20\"\n          height=\"20\"\n          fill=\"currentColor\"\n          class=\"bi bi-x-lg\"\n          viewBox=\"0 0 16 16\"\n        >\n          <path\n            d=\"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z\"\n          />\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n", styles: [".ui-card__description,.ui-card__category{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.ui-card{box-shadow:0 0 16px #2223;padding:32px 16px;display:flex;border-radius:4px;transition:all .2s;cursor:pointer}.ui-card:hover{background-color:#f3f6fb}.ui-card__wrapper{margin-left:16px;display:flex;flex-grow:1}.ui-card__description{flex-grow:1}.ui-card__image{width:80px;display:flex;flex:0 0 auto;align-items:center;justify-content:center}.ui-card__name{color:#222;margin-bottom:8px;font-size:20px}.ui-card__category{color:#cb9b42;margin-bottom:8px;-webkit-line-clamp:1}.ui-card__description{color:#595959;-webkit-line-clamp:2}.ui-card__actions{display:flex;align-items:center;margin-top:-8px}.ui-card__delete{border:none;background:transparent}.ui-card__delete:hover svg{fill:#222}.ui-card__delete svg{fill:#595959}::ng-deep ngb-tooltip-window{max-width:125px}::ng-deep ngb-tooltip-window *{text-align:left!important}\n"] }]
        }], propDecorators: { item: [{
                type: Input
            }], showActions: [{
                type: Input
            }], onDelete: [{
                type: Output
            }], tooltipPosition: [{
                type: Input
            }] } });

class CardListComponent {
    constructor() {
        this.items = [];
        this.className = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: CardListComponent, selector: "ui-card-list", inputs: { items: "items", className: "className" }, queries: [{ propertyName: "card", first: true, predicate: ["card"], descendants: true }], ngImport: i0, template: "<div class=\"card-list {{ className }}\">\n  <ng-container *ngFor=\"let item of items\">\n    <ng-container *ngTemplateOutlet=\"card; context: { $implicit: item }\">\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [".card-list ::ng-deep>*:not(:last-child){display:block;margin-bottom:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-card-list', template: "<div class=\"card-list {{ className }}\">\n  <ng-container *ngFor=\"let item of items\">\n    <ng-container *ngTemplateOutlet=\"card; context: { $implicit: item }\">\n    </ng-container>\n  </ng-container>\n</div>\n", styles: [".card-list ::ng-deep>*:not(:last-child){display:block;margin-bottom:24px}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], className: [{
                type: Input
            }], card: [{
                type: ContentChild,
                args: ['card']
            }] } });

class CardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: CardModule, declarations: [CardComponent, CardListComponent], imports: [CommonModule, NgbTooltipModule], exports: [CardComponent, CardListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardModule, imports: [CommonModule, NgbTooltipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardComponent, CardListComponent],
                    imports: [CommonModule, NgbTooltipModule],
                    exports: [CardComponent, CardListComponent],
                }]
        }] });

class LinkTabComponent {
    constructor() {
        this.items = [];
    }
    /**
     *  Activate recently clicked tab and deactivate others tabs
     */
    handleClick($event) {
        this.items = this.items.map((item) => {
            if (item.route === $event.route) {
                return { ...item, isActive: true };
            }
            return { ...item, isActive: false };
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LinkTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: LinkTabComponent, selector: "ui-link-tab", inputs: { items: "items" }, ngImport: i0, template: "<ul class=\"ui-link-tabs\">\n  <li *ngFor=\"let item of items\">\n    <a\n      class=\"ui-link-tabs__link\"\n      routerLink=\"{{ item.route }}\"\n      (click)=\"handleClick(item)\"\n      [class.active]=\"item.isActive\"\n    >\n      {{ item.label }}\n    </a>\n  </li>\n</ul>\n", styles: [".ui-link-tabs{padding:0;list-style:none;display:flex}.ui-link-tabs li:not(:last-child) .ui-link-tabs__link{margin-right:16px}.ui-link-tabs__link{text-decoration:none;font-size:20px}.ui-link-tabs__link.active{color:#222}.ui-link-tabs__link:not(.active){color:#8c8c8c}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LinkTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-link-tab', template: "<ul class=\"ui-link-tabs\">\n  <li *ngFor=\"let item of items\">\n    <a\n      class=\"ui-link-tabs__link\"\n      routerLink=\"{{ item.route }}\"\n      (click)=\"handleClick(item)\"\n      [class.active]=\"item.isActive\"\n    >\n      {{ item.label }}\n    </a>\n  </li>\n</ul>\n", styles: [".ui-link-tabs{padding:0;list-style:none;display:flex}.ui-link-tabs li:not(:last-child) .ui-link-tabs__link{margin-right:16px}.ui-link-tabs__link{text-decoration:none;font-size:20px}.ui-link-tabs__link.active{color:#222}.ui-link-tabs__link:not(.active){color:#8c8c8c}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }] } });

class LinkTabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LinkTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: LinkTabModule, declarations: [LinkTabComponent], imports: [CommonModule, RouterModule], exports: [LinkTabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LinkTabModule, imports: [CommonModule, RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LinkTabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LinkTabComponent],
                    imports: [CommonModule, RouterModule],
                    exports: [LinkTabComponent],
                }]
        }] });

class AddNewComponent {
    constructor() {
        this.onAddNew = new EventEmitter();
    }
    /**
     * Emit onAddNew event when click on Click here link
     */
    handleClick($event) {
        $event.preventDefault();
        this.onAddNew.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: AddNewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: AddNewComponent, selector: "ui-add-new", outputs: { onAddNew: "onAddNew" }, ngImport: i0, template: "<div class=\"ui-add-new\">\n  Nothing to see yet. <br />\n  <a href=\"#\" (click)=\"handleClick($event)\">Click here</a> to add your first\n  beer!\n</div>\n", styles: [".ui-add-new{height:600px;background:#fafafa;text-align:center;padding-top:15%;color:#595959;line-height:1.8}.ui-add-new a{text-decoration:none;color:#3866b7}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: AddNewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-add-new', template: "<div class=\"ui-add-new\">\n  Nothing to see yet. <br />\n  <a href=\"#\" (click)=\"handleClick($event)\">Click here</a> to add your first\n  beer!\n</div>\n", styles: [".ui-add-new{height:600px;background:#fafafa;text-align:center;padding-top:15%;color:#595959;line-height:1.8}.ui-add-new a{text-decoration:none;color:#3866b7}\n"] }]
        }], propDecorators: { onAddNew: [{
                type: Output
            }] } });

class AddNewModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: AddNewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: AddNewModule, declarations: [AddNewComponent], imports: [CommonModule], exports: [AddNewComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: AddNewModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: AddNewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AddNewComponent],
                    imports: [CommonModule],
                    exports: [AddNewComponent],
                }]
        }] });

class ButtonComponent {
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

class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [CommonModule],
                    exports: [ButtonComponent],
                }]
        }] });

class LoaderComponent {
    constructor() {
        this.text = ''; /* Loading text */
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: LoaderComponent, selector: "ui-loader", inputs: { text: "text" }, ngImport: i0, template: "<div class=\"ui-loader\"></div>\n<p class=\"ui-loader__text\" *ngIf=\"text\">{{ text }}</p>\n", styles: [":host{position:relative;padding:80px 0;display:flex;justify-content:center;flex-direction:column;align-items:center}.ui-loader__text{color:#595959;margin-top:16px}.ui-loader{border-radius:50%;width:40px;height:40px;font-size:0;text-indent:-9999em;border-top:3px solid rgba(56,102,183,.2);border-right:3px solid rgba(56,102,183,.2);border-bottom:3px solid rgba(56,102,183,.2);border-left:3px solid #3866b7;transform:translateZ(0);animation:loader 1.1s infinite linear}@keyframes loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-loader', template: "<div class=\"ui-loader\"></div>\n<p class=\"ui-loader__text\" *ngIf=\"text\">{{ text }}</p>\n", styles: [":host{position:relative;padding:80px 0;display:flex;justify-content:center;flex-direction:column;align-items:center}.ui-loader__text{color:#595959;margin-top:16px}.ui-loader{border-radius:50%;width:40px;height:40px;font-size:0;text-indent:-9999em;border-top:3px solid rgba(56,102,183,.2);border-right:3px solid rgba(56,102,183,.2);border-bottom:3px solid rgba(56,102,183,.2);border-left:3px solid #3866b7;transform:translateZ(0);animation:loader 1.1s infinite linear}@keyframes loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }] } });

class LoaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: LoaderModule, declarations: [LoaderComponent], imports: [CommonModule], exports: [LoaderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoaderModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LoaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LoaderComponent],
                    imports: [CommonModule],
                    exports: [LoaderComponent],
                }]
        }] });

class NoDataComponent {
    constructor() {
        this.text = 'No Data Found !';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NoDataComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: NoDataComponent, selector: "ui-no-data", inputs: { text: "text" }, ngImport: i0, template: "<div class=\"ui-no-data\">{{ text }}</div>\n", styles: [".ui-no-data{padding:40px;margin:20px;text-align:center;font-size:1.2rem}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NoDataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-no-data', template: "<div class=\"ui-no-data\">{{ text }}</div>\n", styles: [".ui-no-data{padding:40px;margin:20px;text-align:center;font-size:1.2rem}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }] } });

class NoDataModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NoDataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: NoDataModule, declarations: [NoDataComponent], imports: [CommonModule], exports: [NoDataComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NoDataModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NoDataModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NoDataComponent],
                    imports: [CommonModule],
                    exports: [NoDataComponent],
                }]
        }] });

class ToastService {
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

class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
        /* Default time to hide the toast */
        this.DEFAULT_DELAY_TITLE = 3000;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastComponent, deps: [{ token: ToastService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: ToastComponent, selector: "ui-toast", ngImport: i0, template: "<ngb-toast\n  *ngFor=\"let toast of toastService.toasts\"\n  [class]=\"toast.type\"\n  [header]=\"toast.type\"\n  [autohide]=\"true\"\n  [delay]=\"toast.delay || DEFAULT_DELAY_TITLE\"\n  (hiddden)=\"toastService.remove(toast)\"\n>\n  {{ toast.body }}\n</ngb-toast>\n", styles: ["ngb-toast{border:none;border-left:5px solid;border-radius:4px;padding:16px;background-color:#fff;margin-top:8px}:host{position:fixed;left:40px;bottom:40px}:host ::ng-deep ngb-toast.success{border-color:#69c051}:host ::ng-deep ngb-toast.success .toast-header{color:#69c051}:host ::ng-deep ngb-toast.error{border-color:#e34371}:host ::ng-deep ngb-toast.error .toast-header{color:#e34371}:host ::ng-deep ngb-toast.info{border-color:#515ee8}:host ::ng-deep ngb-toast.info .toast-header{color:#515ee8}:host ::ng-deep .toast-header{border-bottom:none;font-size:.9rem;text-transform:capitalize}:host ::ng-deep .toast-header+.toast-body{margin-top:4px}:host ::ng-deep .toast-header,:host ::ng-deep .toast-body{padding:0}:host ::ng-deep .btn-close{font-size:.7rem}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.NgbToast, selector: "ngb-toast", inputs: ["animation", "delay", "autohide", "header"], outputs: ["shown", "hidden"], exportAs: ["ngbToast"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-toast', template: "<ngb-toast\n  *ngFor=\"let toast of toastService.toasts\"\n  [class]=\"toast.type\"\n  [header]=\"toast.type\"\n  [autohide]=\"true\"\n  [delay]=\"toast.delay || DEFAULT_DELAY_TITLE\"\n  (hiddden)=\"toastService.remove(toast)\"\n>\n  {{ toast.body }}\n</ngb-toast>\n", styles: ["ngb-toast{border:none;border-left:5px solid;border-radius:4px;padding:16px;background-color:#fff;margin-top:8px}:host{position:fixed;left:40px;bottom:40px}:host ::ng-deep ngb-toast.success{border-color:#69c051}:host ::ng-deep ngb-toast.success .toast-header{color:#69c051}:host ::ng-deep ngb-toast.error{border-color:#e34371}:host ::ng-deep ngb-toast.error .toast-header{color:#e34371}:host ::ng-deep ngb-toast.info{border-color:#515ee8}:host ::ng-deep ngb-toast.info .toast-header{color:#515ee8}:host ::ng-deep .toast-header{border-bottom:none;font-size:.9rem;text-transform:capitalize}:host ::ng-deep .toast-header+.toast-body{margin-top:4px}:host ::ng-deep .toast-header,:host ::ng-deep .toast-body{padding:0}:host ::ng-deep .btn-close{font-size:.7rem}\n"] }]
        }], ctorParameters: function () { return [{ type: ToastService }]; } });

class ToastModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: ToastModule, declarations: [ToastComponent], imports: [CommonModule, NgbToastModule], exports: [ToastComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastModule, imports: [CommonModule, NgbToastModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ToastComponent],
                    imports: [CommonModule, NgbToastModule],
                    exports: [ToastComponent],
                }]
        }] });

var ToastType;
(function (ToastType) {
    ToastType["Success"] = "success";
    ToastType["Info"] = "info";
    ToastType["Error"] = "error";
})(ToastType || (ToastType = {}));

/*
 * Public API Surface of ui-ng
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddNewComponent, AddNewModule, ButtonComponent, ButtonModule, CardComponent, CardListComponent, CardModule, LinkTabComponent, LinkTabModule, LoaderComponent, LoaderModule, NoDataComponent, NoDataModule, ToastComponent, ToastModule, ToastService, ToastType, TooltipPosition };
//# sourceMappingURL=ui-ng.mjs.map
