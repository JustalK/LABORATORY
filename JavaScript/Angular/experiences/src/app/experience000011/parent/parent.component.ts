import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000011-parent',
  templateUrl: './parent.component.html'
})
export default class ParentComponent {
  data = '';

  doSomething(v: string) {
    this.data = v;
  }
}
