import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonImage, getPokemonNumber } from 'src/app/interface/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon;


  //pegando a funçao de um arquivo e trazendo para ca, esta na interface
  public getPokemonNumber = getPokemonNumber
  public getPokemonImage = getPokemonImage
}
