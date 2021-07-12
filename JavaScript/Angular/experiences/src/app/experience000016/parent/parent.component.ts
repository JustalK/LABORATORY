import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000016-parent',
  templateUrl: './parent.component.html'
})
export default class ParentComponent {
  currentCustomer = 'Maria';
  birthday = new Date(1988, 3, 15);

  callConsole(value: string) {
    console.log(value);
  }
}
