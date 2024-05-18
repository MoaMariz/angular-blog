import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ContentPage } from './pages/content/content.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomePage,
    ContentPage,
    MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
