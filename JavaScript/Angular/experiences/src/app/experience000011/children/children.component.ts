import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-experience000011-children',
  templateUrl: './children.component.html'
})
export default class ChildrenComponent {
  @Output() newDataEvent = new EventEmitter<string>();

  changeData() {
    this.newDataEvent.emit('activated')
  }
}
