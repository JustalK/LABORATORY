import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-experience000004-children',
  templateUrl: './children.component.html',
  styles: ['span { display: block; }'],
})
export default class ChildrenComponent implements OnChanges {
  @Input('data') data = 0;
  changeLog: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.changeLog.push(changes.data.previousValue)
  }
}
