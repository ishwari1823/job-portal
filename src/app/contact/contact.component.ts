import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  name = '';
  email = '';
  subject = '';
  message = '';

  sendMessage() {
    if (
      !this.name ||
      !this.email ||
      !this.subject ||
      !this.message
    ) {
      alert('Please fill all fields.');
      return;
    }
    alert('Your message has been sent successfully!');
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

}