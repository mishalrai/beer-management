import { Component, Input } from '@angular/core';
import { LinkTab } from '../../model/link-tab.interface';

@Component({
  selector: 'ui-link-tab',
  templateUrl: './link-tab.component.html',
  styleUrls: ['./link-tab.component.scss'],
})
export class LinkTabComponent {
  @Input()
  public items: Array<LinkTab> = [];

  /**
   *  Activate recently clicked tab and deactivate others tabs
   */
  public handleClick($event: LinkTab) {
    this.items = this.items.map((item) => {
      if (item.route === $event.route) {
        return { ...item, isActive: true };
      }
      return { ...item, isActive: false };
    });
  }
}
