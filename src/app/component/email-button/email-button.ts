import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/data';

@Component({
  selector: 'app-email-button',
  standalone: true,
  imports: [],
  templateUrl: './email-button.html',
  styleUrl: './email-button.css',
})
export class EmailButton {
  email = PORTFOLIO_DATA.personal.email
  copyText() {
  const text = this.email;

  navigator.clipboard.writeText(text)
    .then(() => console.log("Copied"))
    .catch(err => console.error("Clipboard failed:", err));
  }
}
