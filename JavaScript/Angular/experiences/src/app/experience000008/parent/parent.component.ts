import { Component, ViewChild } from '@angular/core';
import Children from '../children/children.component';
import { Experience000008Service } from '../experience000008.service';

@Component({
  selector: 'app-experience000008-parent',
  templateUrl: './parent.component.html',
  providers: [Experience000008Service]
})
export default class ParentComponent {
  history: string[] = [];

  constructor(private service: Experience000008Service) {
    service.messageFromChildren$.subscribe(
      message => {
        this.history.push(`New Message From asObservable`);
      }
    );
  }

  addMessageParent() {
    this.history.push(`New Message From Parent`);
    this.service.addMessageParent('New message From Parent');
  }
}
