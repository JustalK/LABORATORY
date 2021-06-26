import { Component, ViewChild } from '@angular/core';
import Children from '../children/children.component';

@Component({
  selector: 'app-experience000007-parent',
  templateUrl: './parent.component.html'
})
export default class ParentComponent {
  @ViewChild(Children)
  private childComponent!: Children

  data() {
    return 0;
  }

  increment() {
    this.childComponent.increment();
  }

  ngAfterViewInit() {
    // waiting a tick
    setTimeout(() => this.data = () => this.childComponent.data, 0);
  }
}
