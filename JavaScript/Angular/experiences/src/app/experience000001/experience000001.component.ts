import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { LoggerService } from '../logger.service'
@Component({
  selector: 'app-experience000001',
  templateUrl: './experience000001.component.html',
  styleUrls: ['./experience000001.component.scss']
})
export class Experience000001Component implements OnInit, OnChanges {
  @Input() name = '';

  constructor(private logger: LoggerService) {
    console.log('Constructor')
    const is = this.name ? 'is' : 'is not';
  }

  // Call whn data input are set or reset
  ngOnChanges(): void {
    console.log('OnChange')
  }

  // Call just after reading the property
  ngOnInit(): void {
    console.log('OnInit')
  }

  // Call just after destroying the component
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

}
