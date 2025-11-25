import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-block',
  imports: [],
  templateUrl: './list-block.html',
  styleUrl: './list-block.css',
})
export class ListBlock {
  @Input() title!: string;
  @Input() stack!: string;
  @Input() logo!: string;
  @Input() link!: string;
}
