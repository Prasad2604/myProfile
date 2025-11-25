import { Component } from '@angular/core';
import { Button } from '../button/button';
import { EmailButton } from '../email-button/email-button';

@Component({
  selector: 'app-intro',
  imports: [Button, EmailButton],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {

}
