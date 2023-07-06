import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class AddNewComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: AddNewComponent, selector: "ui-add-new", outputs: { onAddNew: "onAddNew" }, ngImport: i0, template: "<div class=\"ui-add-new\">\n  Nothing to see yet. <br />\n  <a href=\"#\" (click)=\"handleClick($event)\">Click here</a> to add your first\n  beer!\n</div>\n", styles: [".ui-add-new{height:calc(100vh - 150px);background:#fafafa;text-align:center;padding-top:25vh;color:#595959;line-height:1.8}.ui-add-new a{text-decoration:none;color:#3866b7}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: AddNewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-add-new', template: "<div class=\"ui-add-new\">\n  Nothing to see yet. <br />\n  <a href=\"#\" (click)=\"handleClick($event)\">Click here</a> to add your first\n  beer!\n</div>\n", styles: [".ui-add-new{height:calc(100vh - 150px);background:#fafafa;text-align:center;padding-top:25vh;color:#595959;line-height:1.8}.ui-add-new a{text-decoration:none;color:#3866b7}\n"] }]
        }], propDecorators: { onAddNew: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW5ldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1uZy9zcmMvbGliL21vZHVsZXMvYWRkLW5ldy9jb21wb25lbnRzL2FkZC1uZXcvYWRkLW5ldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1uZy9zcmMvbGliL21vZHVsZXMvYWRkLW5ldy9jb21wb25lbnRzL2FkZC1uZXcvYWRkLW5ldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2hFLE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBT1MsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0tBU2hFO0lBUEM7O09BRUc7SUFDSSxXQUFXLENBQUMsTUFBYTtRQUM5QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzhHQVZVLGVBQWU7a0dBQWYsZUFBZSxxRkNQNUIsK0pBS0E7OzJGREVhLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsWUFBWTs4QkFNZixRQUFRO3NCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWFkZC1uZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLW5ldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZC1uZXcuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkTmV3Q29tcG9uZW50IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkFkZE5ldzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0IG9uQWRkTmV3IGV2ZW50IHdoZW4gY2xpY2sgb24gQ2xpY2sgaGVyZSBsaW5rXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlQ2xpY2soJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25BZGROZXcuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidWktYWRkLW5ld1wiPlxuICBOb3RoaW5nIHRvIHNlZSB5ZXQuIDxiciAvPlxuICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCI+Q2xpY2sgaGVyZTwvYT4gdG8gYWRkIHlvdXIgZmlyc3RcbiAgYmVlciFcbjwvZGl2PlxuIl19