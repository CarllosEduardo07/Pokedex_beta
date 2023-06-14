import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interface/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon;

  public leadingZero (str: String | number, size: number = 3): String {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
