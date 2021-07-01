import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-experience000010-children',
  templateUrl: './children.component.html'
})
export default class ChildrenComponent implements OnChanges {
  @Input() data = ''

  ngOnChanges() {
    console.log('changes')
  }
}
