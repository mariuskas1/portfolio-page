import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({ translate: '0%' })),
      state('out', style({ translate:  '100%'})),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('200ms ease-in'))
    ])
  ]
})

export class MobileMenuComponent {
  @Input() currentLanguage!: string;
  @Input() mobileMenuOpen = false;
  @Output() languageToggle = new EventEmitter<Event>();
  @Output() menuClose = new EventEmitter<Event>();


  triggerLanguageToggle(event: Event) {
    this.languageToggle.emit(event);
  }


  closeMenu() {
    this.mobileMenuOpen = false;
    setTimeout(() => {
      
      this.menuClose.emit(); 
    }, 200);
  }
  
}
