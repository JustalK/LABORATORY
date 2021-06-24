import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service'
@Component({
  selector: 'app-experience000001',
  templateUrl: './experience000001.component.html',
  styleUrls: ['./experience000001.component.scss']
})
export class Experience000001Component implements OnInit {

  constructor(private logger: LoggerService) {
    console.log('Constructor')
    this.logger
  }

  // Call whn data input are set or reset
  ngOnChange(): void {
    console.log('OnChange')
  }

  // Call just after reading the property
  ngOnInit(): void {
    console.log('OnInit')
  }

}
