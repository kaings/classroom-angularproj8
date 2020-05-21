import {Component, ContentChild, Input, TemplateRef, AfterContentInit, OnInit} from '@angular/core';
import {NgForOfContext} from '@angular/common';

@Component({
  selector: 'skill-list',
  template: `
    <ng-template ngFor let-skill [ngForOf]="skills" 
                 [ngForTemplate]="customSkillListTemplate ? customSkillListTemplate : defaultSkillListTemplate">
      <div class="media d-flex m-2" #defaultSkillListTemplate>
        <img class="mx-5 icon" [src]="skill.icon" alt="skill icon" style="">
        <div class="media-body align-self-center">{{skill.name}}</div>
      </div>
    </ng-template>
  `
})
export class SkillListComponent implements AfterContentInit, OnInit {
  @Input() skills: {[key: string]: string}[];
  @ContentChild(TemplateRef) customSkillListTemplate: TemplateRef<NgForOfContext<any>>;

  ngAfterContentInit() {
    console.log('ngAfterContentInit..... ', this.customSkillListTemplate);
  }

  ngOnInit() {
    console.log('ngOnInit..... ', this.customSkillListTemplate);
  }
}
