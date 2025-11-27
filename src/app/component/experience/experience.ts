import { Component } from '@angular/core';
import { ListBlock } from '../list-block/list-block';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ListBlock,CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experience = PORTFOLIO_DATA.experience;
}
