import { Component, OnDestroy } from '@angular/core';
import { Experience000008Service } from '../experience000008.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience000008-children',
  templateUrl: './children.component.html',
  styles: ['span { display: block; }']
})
export default class ChildrenComponent implements OnDestroy {
  history: string[] = [];
  subscription: Subscription;

  constructor(private service: Experience000008Service) {
    this.subscription = service.messageFromParent$.subscribe(
      message => {
        this.history.push(`New Message From subscription`);
      }
    )
  }

  addMessageParent() {
    this.service.addMessageChildren('Children sending message');
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
