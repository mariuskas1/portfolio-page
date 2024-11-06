import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLanguage);
  }

  setLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.languageSubject.next(language);
  }

  toggleLanguage(isGerman: boolean) {
    const language = isGerman ? 'de' : 'en';
    this.setLanguage(language);
  }
}
