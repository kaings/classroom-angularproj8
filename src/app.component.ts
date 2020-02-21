import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  default = true;
  skills: {[key: string]: string}[] = [
    {icon: './assets/images/angular.png', name: 'angular'},
    {icon: './assets/images/nodejs.png', name: 'nodejs'},
    {icon: './assets/images/webpack.png', name: 'webpack'},
    {icon: './assets/images/serverless.png', name: 'serverless'},
    {icon: './assets/images/solidity.jpeg', name: 'solidity'}
  ];

  switchTabPanelType() {
    this.default = !this.default;
  }
}
