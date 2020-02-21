import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab-content/tab.component';
import {SkillListComponent} from './skill-list/skill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    TabComponent,
    SkillListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
