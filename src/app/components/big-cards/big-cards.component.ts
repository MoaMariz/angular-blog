import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'big-cards',  
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-cards.component.html',
  styleUrl: './big-cards.component.css'
})
export class BigCardsComponent {

  @Input()
  imgCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  Id: string = "0" 

  constructor() { }

}
