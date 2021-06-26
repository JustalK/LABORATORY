import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-experience000005-children',
  templateUrl: './children.component.html',
  styles: ['span { display: block; }'],
})
export default class ChildrenComponent {
  @Output() dataParent = new EventEmitter<number>();
  data = 0;

  increment() {
    this.data++;
    this.dataParent.emit(this.data);
  }
}
