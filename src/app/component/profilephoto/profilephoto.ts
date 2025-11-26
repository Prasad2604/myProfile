import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/data';
@Component({
  selector: 'app-profilephoto',
  standalone: true,
  imports: [],
  templateUrl: './profilephoto.html',
  styleUrl: './profilephoto.css',
})
export class Profilephoto {
  photo  = PORTFOLIO_DATA.personal.profileImage;
}
