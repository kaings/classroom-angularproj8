import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab-content/tab.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html'
})
export class TabPanelComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;
  tabs: TabComponent[];

  ngAfterContentInit() {
    this.tabs = this.tabComponents.toArray();
    this.tabs[0].selected = true;

    console.log(this.tabs);
  }

  selectTab(tabComponent: TabComponent) {
    console.log('index..... ', tabComponent);
    this.tabs.map((tab: TabComponent) => tab.selected = false);
    tabComponent.selected = true;
  }

  get tabPanelObj() {
    return {
      tabPanelObjProp: this.tabs
    };
  }
}
