import { Component } from '@angular/core';
import { Project } from '../../component/project/project';
import { Connect } from '../../component/connect/connect';
import { FollowBlock } from '../../component/follow-block/follow-block';
import { Intro } from '../../component/intro/intro';
import { Navbar } from '../../component/navbar/navbar';
import { Experience } from '../../component/experience/experience';

@Component({
  selector: 'app-home',
  imports: [Project, Connect, FollowBlock, Intro, Navbar, Experience],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})

export class Home {

}
