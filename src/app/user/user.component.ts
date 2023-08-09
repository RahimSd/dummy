import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  counter = 0;
  addcount() {
    this.counter++;


  }
  subcount() {
    if (this.counter > 0) {
      this.counter -= 1
    }
  }
}
