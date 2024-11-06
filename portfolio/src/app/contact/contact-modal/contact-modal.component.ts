import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
  animations: [
    trigger('slideInAndOut', [
      state('hidden', style({
        transform: 'translateY(-300%)',
        
      })),
      state('visible', style({
        transform: 'translateY(0)',
       
      })),
      transition('hidden => visible', [
        animate('400ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class ContactModalComponent {
  @Input () formSubmitted: boolean = false;
  
}
