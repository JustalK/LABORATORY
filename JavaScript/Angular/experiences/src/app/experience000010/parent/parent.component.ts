import { Component } from '@angular/core';

@Component({
  selector: 'app-experience000010-parent',
  templateUrl: './parent.component.html'
})
export default class ParentComponent {
  currentData = 'Parent Data'

  changeData() {
    this.currentData = this.currentData === 'Parent Data' ? 'Data Parent' : 'Parent Data'; 
  }
}
