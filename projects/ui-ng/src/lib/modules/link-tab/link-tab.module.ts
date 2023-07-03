import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkTabComponent } from './component/link-tab/link-tab.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LinkTabComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinkTabComponent],
})
export class LinkTabModule {}
