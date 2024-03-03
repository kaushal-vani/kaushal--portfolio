import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { HeaderContent } from './header.models';
import { HeaderContentMocks } from './header.mocks';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  content: HeaderContent = HeaderContentMocks;
}
