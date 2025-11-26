import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/data';

@Component({
  selector: 'app-follow-block',
  standalone: true,
  imports: [],
  templateUrl: './follow-block.html',
  styleUrl: './follow-block.css',
})
export class FollowBlock {
  instagram = PORTFOLIO_DATA.personal.instagram;
  twitter = PORTFOLIO_DATA.personal.twitter;
  linkedin = PORTFOLIO_DATA.personal.linkedin;

  open(url: string) {
    window.open(url, "_blank");
  }
}
