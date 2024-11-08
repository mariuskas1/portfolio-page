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
    const savedLanguage = this.getSavedLanguage() || 'en';
    this.setLanguage(savedLanguage);
  }

  private getSavedLanguage(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('language');
    }
    return null;
  }

  private saveLanguage(language: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', language);
    }
  }

  setLanguage(language: string) {
    this.translate.use(language);
    this.saveLanguage(language);
    this.languageSubject.next(language);
  }

  toggleLanguage(isGerman: boolean) {
    const language = isGerman ? 'de' : 'en';
    this.setLanguage(language);
  }
}
