import { Component } from '@angular/core';
import { FollowBlock } from '../../component/follow-block/follow-block';
import { Connect } from '../../component/connect/connect';
import { Aboutme } from '../../component/aboutme/aboutme';
import { Profilephoto } from '../../component/profilephoto/profilephoto';

@Component({
  selector: 'app-about',
  imports: [FollowBlock, Connect, Aboutme, Profilephoto],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true,
})
export class About {

}
