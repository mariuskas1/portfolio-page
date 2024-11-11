import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactModalComponent } from "./contact-modal/contact-modal.component";
import AOS from "aos";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, ContactModalComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  formSubmitted = false;

  policyAccepted = false;

  mailTest = false;


  post = {
    endPoint: 'https://marius-kasparek.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.displayModal();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.formSubmitted = true;
      
      setTimeout(() => {
        ngForm.resetForm();
      }, 500)

      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);
      
    }
  }

  displayModal(){
    this.formSubmitted = true;
    setTimeout(() => {
      this.formSubmitted = false;
    }, 3000);
  }


}
