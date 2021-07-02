import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000013-parent',
  templateUrl: './parent.component.html',
  styles: ['.activated { color: red }']
})
export default class ParentComponent {
  class = false
  styleActivator = false
  style = {}
  currentItem = {
    name: 'test'
  }
  changeClass() {
    this.class = !this.class
  }
  changeStyle() {
    this.styleActivator = !this.styleActivator
    this.style = {
      'font-size':   this.styleActivator    ? '24px'   : '12px'
    };
  }

  onChange() {
    console.log('change');
  }
}
