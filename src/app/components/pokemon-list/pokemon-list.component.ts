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
}

