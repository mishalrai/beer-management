import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  @Input()
  public text: string = 'No Data Found !';
}
