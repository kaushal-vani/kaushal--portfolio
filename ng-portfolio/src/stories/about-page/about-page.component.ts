import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutPageCardMocks } from './about-page.mocks';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-portfolio-about-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  aboutPageCardMocks = AboutPageCardMocks;
}
