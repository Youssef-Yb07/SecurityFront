import { Component } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent {

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

}
