import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCardsComponent } from '../../components/big-cards/big-cards.component';
import { FooterBigCardComponent } from '../../components/footer-big-card/footer-big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardsComponent } from '../../components/small-cards/small-cards.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    MenuBarComponent, 
    MenuTitleComponent, 
    BigCardsComponent, 
    SmallCardsComponent, 
    FooterBigCardComponent,
    RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePage {

  constructor() { }
}
