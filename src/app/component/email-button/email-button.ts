import { Component } from '@angular/core';

@Component({
  selector: 'app-email-button',
  imports: [],
  templateUrl: './email-button.html',
  styleUrl: './email-button.css',
})
export class EmailButton {
  copyText() {
  const text = "kunalshinde0612@gmail.com";

  navigator.clipboard.writeText(text)
    .then(() => console.log("Copied"))
    .catch(err => console.error("Clipboard failed:", err));
  }
}
