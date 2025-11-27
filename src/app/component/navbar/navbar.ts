import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RouterModule } from '@angular/router';
import { ToggleTheme } from '../toggle-theme/toggle-theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Button, RouterModule, ToggleTheme],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  
}
