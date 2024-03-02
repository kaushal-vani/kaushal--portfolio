import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import type { User } from '../user';

@Component({
  selector: 'portfolio-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl:'./home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };
  }
}
