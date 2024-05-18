import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'small-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-cards.component.html',
  styleUrl: './small-cards.component.css'
})
export class SmallCardsComponent {

  @Input()
  imgCover: string = ""
  @Input()
  smallCardTitle: string = ""
  @Input()
  smallCardDescription: string = ""
  @Input()
  Id: string = ""

  constructor() { }

}
