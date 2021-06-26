import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000005-parent',
  templateUrl: './parent.component.html'
})
export default class ParentComponent {
  data = 0;
  onData(data: number) {
    this.data = data
  }
}
