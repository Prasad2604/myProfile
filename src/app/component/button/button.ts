import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/data';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  email = PORTFOLIO_DATA.personal.email;

  openEmail() {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}`;
    window.location.href = url;
  }
}
