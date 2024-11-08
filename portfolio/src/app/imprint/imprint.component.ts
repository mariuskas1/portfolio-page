import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavbarComponent } from '../landing-page/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../app/services/language.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TranslateModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
 
  constructor(private languageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(() => {
      this.cdr.detectChanges(); // Triggers manual change detection
    });
  }

}




  // currentLanguage = 'en';

  // constructor(private languageService: LanguageService) {
  //   this.languageService.currentLanguage$.subscribe(
  //     (lang) => (this.currentLanguage = lang)
  //   );
  // }