import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent {
  @Input()
  public title: string = '';

  public active: boolean = false;
}
