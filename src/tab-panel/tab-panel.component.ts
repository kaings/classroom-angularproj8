import {AfterContentInit, AfterViewInit, Component, ContentChildren, Input, QueryList, TemplateRef} from '@angular/core';
import {TabComponent} from '../tab-content/tab.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html'
})
export class TabPanelComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;
  tabs: TabComponent[];
  @Input() tabPanelType: TemplateRef<any>;

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

  ngAfterViewInit() {
    console.log('tabPanelType..... ', this.tabPanelType); // this won't have any nodes because ng-template won't be rendered
  }
}
