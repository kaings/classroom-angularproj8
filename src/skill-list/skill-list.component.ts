import {Component, Input} from '@angular/core';

@Component({
  selector: 'skill-list',
  template: `
    <ng-template ngFor let-skill [ngForOf]="skills">
      <div class="media d-flex m-2">
        <img class="mx-5 icon" [src]="skill.icon" alt="skill icon" style="">
        <div class="media-body align-self-center">{{skill.name}}</div>
      </div>
    </ng-template>
  `
})
export class SkillListComponent {
  @Input() skills: {[key: string]: string}[];
}
