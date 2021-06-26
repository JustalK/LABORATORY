import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience000003-children',
  templateUrl: './children.component.html'
})
export default class ChildrenComponent {
  @Input('master') masterName = '';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { return this._name; }
  private _name = '';
}
