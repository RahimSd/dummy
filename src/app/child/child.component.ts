import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ngOnInit() {
  }
  public postdata = new BehaviorSubject<any>(null);
  name = 'Sayyad';
  sendData() {
    this.postdata.next(this.name);
  }
}
