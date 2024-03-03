import { Component } from '@angular/core';
import { FooterContentMock } from './footer.mocks';
import type { FooterContent } from './footer.models';

@Component({
  selector: 'app-portfolio-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content: FooterContent = FooterContentMock;
}
