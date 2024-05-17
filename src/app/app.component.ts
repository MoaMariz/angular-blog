import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component'
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';
import { BigCardsComponent } from './components/big-cards/big-cards.component';
import { FooterBigCardComponent } from './components/footer-big-card/footer-big-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuBarComponent, 
    MenuTitleComponent, 
    BigCardsComponent, 
    SmallCardsComponent, 
    FooterBigCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
