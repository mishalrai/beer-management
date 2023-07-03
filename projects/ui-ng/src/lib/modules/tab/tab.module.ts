import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';

@NgModule({
  declarations: [TabComponent, TabPanelComponent],
  imports: [CommonModule],
  exports: [TabComponent, TabPanelComponent],
})
export class TabModule {}
