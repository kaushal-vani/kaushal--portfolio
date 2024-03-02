import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../stories/header/header.component";
import { HomePageComponent } from '../stories/home-page/home-page.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent,HomePageComponent]
})
export class AppComponent {
  title = 'ng-portfolio';
}
