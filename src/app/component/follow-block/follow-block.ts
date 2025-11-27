import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/data';

@Component({
  selector: 'app-follow-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow-block.html',
  styleUrl: './follow-block.css',
})
export class FollowBlock {
  socials = PORTFOLIO_DATA.socials;

  open(url: string) {
    window.open(url, "_blank");
  }
}
