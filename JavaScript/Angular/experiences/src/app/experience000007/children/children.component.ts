import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-experience000007-children',
  templateUrl: './children.component.html',
  styles: ['span { display: block; }'],
})
export default class ChildrenComponent {
  data = 0;

  increment() {
    this.data++;
  }
}
