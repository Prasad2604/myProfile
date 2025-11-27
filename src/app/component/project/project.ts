import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBlock } from '../list-block/list-block';
import { PORTFOLIO_DATA } from '../../data/data';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ListBlock,CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projects = PORTFOLIO_DATA.projects;
}
