import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @Input() currentLanguage!: string;

  constructor(private translate: TranslateService){
      
  }

    toggleLanguage(event: Event) {
      const isGerman = (event.target as HTMLInputElement).checked;
      const language = isGerman ? 'de' : 'en';
      this.translate.use(language);
      localStorage.setItem('language', language);
      this.currentLanguage = language;
  }

}
  

