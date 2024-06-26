import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {faInstagram, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menu-bar',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, RouterLink],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  faInstagram = faInstagram
  faGithub = faGithub
  faLinkedinIn = faLinkedinIn
}
