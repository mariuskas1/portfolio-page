import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, MobileMenuComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  @Input() currentLanguage!: string;

  constructor(private translate: TranslateService){
      
  }

  ngOnInit(): void {
    // Check if the window object is available
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLanguage = localStorage.getItem('language') || 'en';
      this.translate.use(savedLanguage);
      this.currentLanguage = savedLanguage;
    } else {
      // Handle case where localStorage is not available (e.g., during server-side rendering)
      this.currentLanguage = 'en'; // Default to 'en' if localStorage is unavailable
      this.translate.use(this.currentLanguage);
    }
  }

    toggleLanguage(event: Event) {
      const isGerman = (event.target as HTMLInputElement).checked;
      const language = isGerman ? 'de' : 'en';
      this.translate.use(language);
      localStorage.setItem('language', language);
      this.currentLanguage = language;
  }

  mobileMenuOpen = false;

  openMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen; 
  }

  closeMenu() {
    this.mobileMenuOpen = false; 
  }
}
  

