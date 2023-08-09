import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public postdata = new BehaviorSubject(null);
  bdate = new Date();
  name = 'saritha';
  arra = [{ 'name': 'sarita' }, { 'name': 'sayyad' }];
  displayName(name: any) {
    console.log('Welocme to', name);
    alert(`welcome to ` + name);

  }
}
