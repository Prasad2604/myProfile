import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-block',
  standalone: true,
  imports: [],
  templateUrl: './list-block.html',
  styleUrl: './list-block.css',
})
export class ListBlock {
  @Input() id!: string;
  @Input() title!: string;
  @Input() stack!: string;
  @Input() logo!: string;
  @Input() link!: string;

  constructor(private router: Router) {}

  openDetails() {
    if (this.id) {
      this.router.navigate(['/details', this.id]);
    }
  }
}
