import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme {
  data = PORTFOLIO_DATA.personal;
}
