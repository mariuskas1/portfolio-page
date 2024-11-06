import { Component } from '@angular/core';
import { NavbarComponent } from '../landing-page/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './../../app/services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  currentLanguage = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }
}
