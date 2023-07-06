import { Component, ContentChild, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLW5nL3NyYy9saWIvbW9kdWxlcy9jYXJkL2NvbXBvbmVudHMvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1uZy9zcmMvbGliL21vZHVsZXMvY2FyZC9jb21wb25lbnRzL2NhcmQtbGlzdC9jYXJkLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7QUFPNUUsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9TLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBRy9CLGNBQVMsR0FBVyxFQUFFLENBQUM7S0FHeEI7OEdBUlksaUJBQWlCO2tHQUFqQixpQkFBaUIsa01DUDlCLHlOQU1BOzsyRkRDYSxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsY0FBYzs4QkFNakIsS0FBSztzQkFEWCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFHZ0IsSUFBSTtzQkFBekIsWUFBWTt1QkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uL21vZGVscy9jYXJkLmludGVyZmFjZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1jYXJkLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxDYXJkPiA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgQENvbnRlbnRDaGlsZCgnY2FyZCcpIGNhcmQhOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQtbGlzdCB7eyBjbGFzc05hbWUgfX1cIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjYXJkOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogaXRlbSB9XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=