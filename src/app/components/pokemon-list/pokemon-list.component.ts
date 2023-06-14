import { Pokemon } from 'src/app/interface/Pokemon';
import { Type } from 'src/app/interface/Type';
import { Component } from '@angular/core';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  public pokemons:Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    }
  ]


  
}

