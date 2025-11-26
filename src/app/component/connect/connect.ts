import { Component } from '@angular/core';
import { Button } from '../button/button';
import { EmailButton } from '../email-button/email-button';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [Button, EmailButton],
  templateUrl: './connect.html',
  styleUrl: './connect.css',
})
export class Connect {

}
