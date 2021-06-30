import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Experience000008Service {
  private sourceParent = new Subject<string>();
  private sourceChildren = new Subject<string>();

  messageFromParent$ = this.sourceParent.asObservable();
  messageFromChildren$ = this.sourceChildren.asObservable();

  addMessageParent(message: string) {
    this.sourceParent.next(message);
  }

  addMessageChildren(message: string) {
    this.sourceChildren.next(message);
  }
}
