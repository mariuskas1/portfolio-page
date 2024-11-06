import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from './../../../app/services/language.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, MobileMenuComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  @Input() currentLanguage!: string;

  constructor(private languageService: LanguageService) {}

  

  ngOnInit(): void {
    // Subscribe to language changes
    this.languageService.currentLanguage$.subscribe(
      (lang) => (this.currentLanguage = lang)
    );
  }

  toggleLanguage(event: Event) {
    const isGerman = (event.target as HTMLInputElement).checked;
    this.languageService.toggleLanguage(isGerman);
  }

  mobileMenuOpen = false;

  openMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen; 
  }

  closeMenu() {
    this.mobileMenuOpen = false; 
  }
}
  

