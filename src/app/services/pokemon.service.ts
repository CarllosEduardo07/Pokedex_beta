import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { Pokemon } from '../interface/Pokemon';
import { Observable, ReplaySubject, from, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private allPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

  public pokemons: Pokemon[] = [];

  constructor( private HttpClient:HttpClient, ) { //conecão com a api do pokemon
    this.HttpClient.get<any>(this.allPokemonUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.HttpClient.get(v.url))
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => {
      const pokemon:Pokemon = {
        image: result.sprites.front_default,
        number: result.id,
        name: result.name,
        types: result.types.map(t => t.type.name),
      };

      this.pokemons[result.id] = pokemon;
    });  
  }
} 
