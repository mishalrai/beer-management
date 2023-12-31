import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input()
  public text: string = ''; /* Loading text */
}
