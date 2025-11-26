import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/data';
import { Connect } from '../../component/connect/connect';
import { FollowBlock } from '../../component/follow-block/follow-block';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,Connect,FollowBlock],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  detail: any = null;
  type: 'project' | 'experience' | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // Match experience
    this.detail = PORTFOLIO_DATA.experience.find(e => e.id === id);
    if (this.detail) {
      this.type = 'experience';
      return;
    }

    // Match projects
    this.detail = PORTFOLIO_DATA.projects.find(p => p.id === id);
    if (this.detail) {
      this.type = 'project';
      return;
    }
  }

  open(url: string) {
    window.open(url, "_blank");
  }
}
