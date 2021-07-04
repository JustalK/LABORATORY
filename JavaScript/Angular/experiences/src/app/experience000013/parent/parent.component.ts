import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000013-parent',
  templateUrl: './parent.component.html',
  styles: ['.activated { color: red }']
})
export default class ParentComponent {
  class = false
  styleActivator = false
  numbers = [1, 2, 3]
  switchCase = 1
  isChildrenActive = true
  style = {}
  currentItem = {
    name: 'test'
  }

  changeChildrenActive() {
    this.isChildrenActive = !this.isChildrenActive
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

  incrementCase() {
    this.switchCase += 1;
  }

  onChange() {
    console.log('change');
  }
}
