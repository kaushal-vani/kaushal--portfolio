import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { User } from '../user';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  uponLogin = new EventEmitter<Event>();

  @Output()
  uponLogout = new EventEmitter<Event>();

  @Output()
  uponCreateAccount = new EventEmitter<Event>();
}
