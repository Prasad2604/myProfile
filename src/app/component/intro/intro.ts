import { Component } from '@angular/core';
import { Button } from '../button/button';
import { EmailButton } from '../email-button/email-button';
import { PORTFOLIO_DATA } from '../../data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [Button, EmailButton,CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  data = PORTFOLIO_DATA.personal;
}
