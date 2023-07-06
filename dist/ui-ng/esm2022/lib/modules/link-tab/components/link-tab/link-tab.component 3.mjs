import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class LinkTabComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: LinkTabComponent, selector: "ui-link-tab", inputs: { items: "items" }, ngImport: i0, template: "<ul class=\"ui-link-tabs\">\n  <li *ngFor=\"let item of items\">\n    <a\n      class=\"ui-link-tabs__link\"\n      routerLink=\"{{ item.route }}\"\n      (click)=\"handleClick(item)\"\n      [class.active]=\"item.isActive\"\n    >\n      {{ item.label }}\n    </a>\n  </li>\n</ul>\n", styles: [".ui-link-tabs{padding:0;list-style:none;display:flex}.ui-link-tabs li:not(:last-child) .ui-link-tabs__link{margin-right:16px}.ui-link-tabs__link{text-decoration:none;font-size:20px}.ui-link-tabs__link.active{color:#222}.ui-link-tabs__link:not(.active){color:#8c8c8c}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: LinkTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-link-tab', template: "<ul class=\"ui-link-tabs\">\n  <li *ngFor=\"let item of items\">\n    <a\n      class=\"ui-link-tabs__link\"\n      routerLink=\"{{ item.route }}\"\n      (click)=\"handleClick(item)\"\n      [class.active]=\"item.isActive\"\n    >\n      {{ item.label }}\n    </a>\n  </li>\n</ul>\n", styles: [".ui-link-tabs{padding:0;list-style:none;display:flex}.ui-link-tabs li:not(:last-child) .ui-link-tabs__link{margin-right:16px}.ui-link-tabs__link{text-decoration:none;font-size:20px}.ui-link-tabs__link.active{color:#222}.ui-link-tabs__link:not(.active){color:#8c8c8c}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbmcvc3JjL2xpYi9tb2R1bGVzL2xpbmstdGFiL2NvbXBvbmVudHMvbGluay10YWIvbGluay10YWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktbmcvc3JjL2xpYi9tb2R1bGVzL2xpbmstdGFiL2NvbXBvbmVudHMvbGluay10YWIvbGluay10YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRakQsTUFBTSxPQUFPLGdCQUFnQjtJQUw3QjtRQU9TLFVBQUssR0FBbUIsRUFBRSxDQUFDO0tBYW5DO0lBWEM7O09BRUc7SUFDSSxXQUFXLENBQUMsTUFBZTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQy9CLE9BQU8sRUFBRSxHQUFHLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDcEM7WUFDRCxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FkVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiwrRUNSN0IsNlJBWUE7OzJGREphLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxhQUFhOzhCQU1oQixLQUFLO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaW5rVGFiIH0gZnJvbSAnLi4vLi4vbW9kZWwvbGluay10YWIuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktbGluay10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluay10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5rLXRhYi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxMaW5rVGFiPiA9IFtdO1xuXG4gIC8qKlxuICAgKiAgQWN0aXZhdGUgcmVjZW50bHkgY2xpY2tlZCB0YWIgYW5kIGRlYWN0aXZhdGUgb3RoZXJzIHRhYnNcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVDbGljaygkZXZlbnQ6IExpbmtUYWIpIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnJvdXRlID09PSAkZXZlbnQucm91dGUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmU6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlOiBmYWxzZSB9O1xuICAgIH0pO1xuICB9XG59XG4iLCI8dWwgY2xhc3M9XCJ1aS1saW5rLXRhYnNcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgPGFcbiAgICAgIGNsYXNzPVwidWktbGluay10YWJzX19saW5rXCJcbiAgICAgIHJvdXRlckxpbms9XCJ7eyBpdGVtLnJvdXRlIH19XCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDbGljayhpdGVtKVwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cIml0ZW0uaXNBY3RpdmVcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICA8L2E+XG4gIDwvbGk+XG48L3VsPlxuIl19