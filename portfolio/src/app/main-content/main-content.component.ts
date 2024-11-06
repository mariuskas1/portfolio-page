import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './../../../src/app/services/language.service'

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, TranslateModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  currentLanguage = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }

  toggleLanguage(event: Event) {
    const isGerman = (event.target as HTMLInputElement).checked;
    this.languageService.toggleLanguage(isGerman);
  }
}


