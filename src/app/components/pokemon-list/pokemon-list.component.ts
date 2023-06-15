import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from 'src/app/interface/Pokemon';
import { Type } from 'src/app/interface/Type';
import { Component } from '@angular/core';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
constructor(public PokemonService: PokemonService) {}//chamando o services.


  // public pokemons:Pokemon[] = [
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  //     number: 1,
  //     name: 'Bulbasaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
  //     number: 2,
  //     name: 'Ivysaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
  //     number: 3,
  //     name: 'Venusaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
  //     number: 4,
  //     name: 'Venusaur',
  //     types: [
  //       Type.Fire
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
  //     number: 5,
  //     name: 'Charmeleon',
  //     types: [
  //       Type.Fire
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
  //     number: 5,
  //     name: 'Charizard',
  //     types: [
  //       Type.Fire
  //     ],
  //   },
  // ]


  
}

