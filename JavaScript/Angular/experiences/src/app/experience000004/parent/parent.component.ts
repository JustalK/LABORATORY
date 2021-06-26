import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000004-parent',
  templateUrl: './parent.component.html'
})
export default class ParentComponent {
  data = 0;

  increment() {
    this.data++;
  }
}
