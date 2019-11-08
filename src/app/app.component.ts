import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  links = [
    { path: '/main', label: 'Главная', active: 'button-active'},
    { path: '/chat', label: 'чат', active: 'button-active'}
  ];
}
