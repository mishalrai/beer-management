import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';
@Component({
  selector: 'ui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabPanelComponent>;
  public tabs!: Array<TabPanelComponent>;

  ngAfterContentInit() {
    this.tabs = this.tabPanels.toArray();
    this.selectTab(this.tabs[0]);
  }

  selectTab(tab: TabPanelComponent) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;
  }
}
