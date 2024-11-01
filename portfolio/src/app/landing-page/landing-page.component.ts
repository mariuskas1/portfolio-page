import { Component, Input } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { TitleComponent } from "./title/title.component";
import { VerticalsComponent } from './verticals/verticals.component';
import { MarqueeComponent } from './marquee/marquee.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, VerticalsComponent, MarqueeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @Input() currentLanguage!: string;
}
